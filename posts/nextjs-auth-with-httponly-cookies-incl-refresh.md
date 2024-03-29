---
layout: post
title: Authenticate third-party API's in Next.js using HttpOnly cookies and axios interceptors
published: true
date: '2022-02-21'
description: How to store third-party API tokens using HttpOnly, including refreshing tokens using axios request interceptors.
cover_image: 2022-02-21.jpg
cover_image_alt: a cat taking a very cozy nap
tags: tutorial, javascript, nextjs
---

_It's the beginning of 2022, and before I dive into this tech filled post, I just wanted to start off cozy and calm. With this amazing picture by Aleksandar Cvetianovic. Take it in. Breathe... and let's go._

Photo by [Aleksandar Cvetanovic](https://unsplash.com/@lemonzandtea?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/cozy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## TL;DR

In this article, we're going to look into storing and managing refreshing authentication tokens from third-party API's using Next.js. We'll use [HttpOnly cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies) and deal with expiring tokens using [axios interceptors](https://axios-http.com/docs/interceptors). Scroll down to "The setup" for all the details.

## Background

Last year I was working on a personal project where I was using a third-party API. I researched ways in which I could store the user access token **without** having to create my own database. One of the possibilities was using HttpOnly cookies. I had already decided to go for Next.js because of the quick server setup that comes with it. I implemented the authentication flow and searched for the logic to refresh tokens. This is how I solved it:

## The setup

### Preface

To follow along, you need to already know how to do the following:

- [set up a Next.js project](https://nextjs.org/docs/getting-started)
- authenticate the third-party API you're going to use through [Next.js API routes](https://nextjs.org/docs/api-routes/introduction).
- understand the logic to refresh your tokens for your third-party API.

### Storing your refresh token inside a HttpOnly cookie

To securely store the third-party API refresh token, we'll use a HttpOnly cookie. To read more about the security they can provide, [check out the docs at MDN.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies).

> **To figure out yourself:**
>
> To start, make sure you have your Next.js project setup with a server that manages getting the refresh token from your third-party API. I'm assuming you've created your own endpoint in the `pages/api` folder. For this example, I'll call the file `getRefreshToken.js`.

We're going to use the [cookie](https://www.npmjs.com/package/cookie) library to help deal with setting our cookie. To add it to our project:

```shell
$ npm install cookie

// or

$ yarn add cookie

```

We will create our cookie in the `getRefreshToken.js` file. After getting your refresh token, use the `res` parameter that is exposed from the request handler in the `get-token` endpoint.

```js
// pages/api/getRefreshToken.js

// --- all the logic you wrote yourself to get the refresh_token

res.setHeader('Set-Cookie', [
  cookie.serialize('refreshToken', refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24,
    sameSite: 'strict',
    path: '/'
  })
]);
```

To enable the cookie as HttpOnly, we set `httpOnly: true`. To only allow access through HTTPS protocol, add `secure: process.env.NODE_ENV !== 'development'`. Currently, HTTPS is usually not used on `localhost`, so we set it up to only use `secure: true` on production. If you're curious about this, you can [read up on it on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies).

Set `maxAge: 60 * 60 * 24`, to define the amount of seconds before the cookie expires. In this case it sets it to 24 hours. This will force the token to be invalidated after 24 hours.

Eventually the endpoint will look something like this:

```js
// pages/api/getRefreshToken.js
import axios from 'axios';
import cookie from 'cookie';

const getRefreshToken = async (req, res) => {
  // we use this 'res' parameter to set the cookie.

  // any logic you need to get your refresh token, including

  const options = {
    // all necessary options for getting the refresh token
  };

  const fetchData = () =>
    axios(options)
      .then(async response => {
        const { refresh_token } = response.data;

        res.setHeader('Set-Cookie', [
          cookie.serialize('refreshToken', refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
            path: '/'
          })
        ]);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ refresh_token }));
      })
      .catch(error => {
        // logic for handling errors
      });

  await fetchData();
};

export default getRefreshToken;
```

If you ever want to use this cookie, you can find it on the `req` object on any call to your Next.js server. It will be available in `req.cookies`.

### Encrypting our refresh token

Because a refresh token is an important part of the authentication flow, we'll add an extra layer of security by encrypting it. We will use the library [`crypto-js`](https://www.npmjs.com/package/crypto-js) for this. This library can help us encrypt our token using an 'encryption key' or password. This password will only be available to our server. This way the server is able to encrypt and decrypt the token.

```shell
$ npm install crypto-js

// or

$ yarn add crypto-js

```

In our `env.local` file (which we do not commit!) we add an environment variable with a encryption key of approximately 32 characters. Make sure this key is truly secret, random and secure!

```env
// .env.local
ENCRYPT_KEY=theverylongpasswordwith32characters
```

In the `getRefreshToken.js` file, import `AES` from `crypto-js/aes`. In the object where we set `refreshToken`, use the `encode` key in the cookie object to pass the function that will encrypt the token:

```js
// pages/api/getRefreshToken.js

import AES from 'crypto-js/aes';

// ...

cookie.serialize('refreshToken', refresh_token, {
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  maxAge: 60 * 60 * 24,
  sameSite: 'strict',
  path: '/',
  encode: value => AES.encrypt(value, process.env.ENCRYPT_KEY).toString()
});
```

Whenever you want to use this token you do need to decrypt it using the encryption key like so:

```js
import CryptoJS from 'crypto-js';

// In the place where you use your refresh token:
const { refreshToken } = req.cookies;
const decryptedRefresh = CryptoJS.AES.decrypt(
  refreshToken,
  process.env.ENCRYPT_KEY
).toString(CryptoJS.enc.Utf8);
```

### Setting up an axios instance to manage refresh tokens

Whenever a token expires or is incorrect, we'll try and refresh them. Usually, in the cases that this happens, an API would return [`401 Unauthorized`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401).

To deal with this we're going to use [axios Interceptors](https://axios-http.com/docs/interceptors).

You can use an interceptor to 'intercept' requests or responses before they are actually handled. In this example we're going to:

- Create our own axios instance and add a request and response interceptor to it.
- Use this axios instance everywhere we are doing calls that use an access token.

This way, if an endpoint is using an access token to get data, and receives an `401 Unauthorized`, we can handle this by refreshing the token. Let's break this down:

Create your own axios instance inside a file called `axios-instance.js`:

```js
// axios-instance.js
import axios from 'axios';

const axiosInstance = axios.create();

export default axiosInstance;
```

To add our interceptor logic we'll start with the response interceptor. Whenever we get a response from an API we check if it is `401 Unauthorized`. If that is the case we refresh the access token and try the call again. To do this we'll be using [axios-auth-refresh](https://www.npmjs.com/package/axios-auth-refresh) which makes it really easy to set this up.

Add the library:

```js
npm install 'axios-auth-refresh'

// or

yarn add 'axios-auth-refresh'

```

Inside the `axios-instance.js` file, import `createAuthRefreshInterceptor`. Then create a `refreshAuthLogic` function. This function has a failedRequest parameter that we receive from our interceptor.

> **To figure out yourself:**
>
> Now it's up to you to create a function we can call that handles refreshing the access token from your third-party API. You can grab the refresh token from `req.cookies`. Don't forget to decrypt it like I showed you before! And make sure it returns the access token __without__ encryption.

Inside `refreshAuthLogic` we will use the refresh function you created yourself, in this example it's called `refreshAccessToken`. That function returns our new token, which we set as the response Authorization header. Finally, we return a resolved promise.

We then call the `createAuthRefreshInterceptor` function and pass in the `axiosInstance` and `refreshAuthLogic` function we created.

```js
// axios-instance.js
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import refreshAccessToken from './refresh-access-token'; // this file contains any logic you need to refresh your token with your third-party API

const axiosInstance = axios.create();

const refreshAuthLogic = failedRequest =>
  refreshAccessToken().then(tokenRefreshResponse => {
    // get the new token
    failedRequest.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.accessToken}`; // set the new token as the authorization header.
    return Promise.resolve();
  });

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

export default axiosInstance;
```

> **To figure out yourself:**
>
> Something to keep in mind for the `refreshAccessToken` logic that you'll be creating yourself to get your refreshed token, is that you're going to have to make sure you also set this new refresh token as a cookie. You can use the same logic as we have used before for that.

Now let's deal with the request interceptors. This is where the fun starts.

Inside our `axios-instance.js` file, we're going to create a `let requestToken;` empty variable. Then inside `refreshAuthLogic`, we assign the refreshed token to `requestToken`. This way, `requestToken` will always be up to date with the latest version of our token.

After this we're going to set our own request interceptor. We tell it to check if `requestToken` is empty or not. If it is empty, we'll use the `refreshAccessToken` function to get a new token. If it is not empty, we use `requestToken` as our authorization header:

```js
// axios-instance.js
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import refreshAccessToken from './refresh-access-token';

let requestToken;

const axiosInstance = axios.create();

const refreshAuthLogic = failedRequest =>
  refreshAccessToken().then(tokenRefreshResponse => {
    failedRequest.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.accessToken}`;
    requestToken = tokenRefreshResponse.accessToken; // change the requestToken with the refreshed one
    return Promise.resolve();
  });

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);

axiosInstance.interceptors.request.use(async request => {
  if (!requestToken) {
    refreshAccessToken().then(tokenRefreshResponse => {
      requestToken = tokenRefreshResponse.accessToken;
    });
  }

  request.headers.Authorization = `Bearer ${requestToken}`;
  return request;
});

export default axiosInstance;
```

From this point on, any request that is made using the axios instance, will grab the authorization token from the `let requestToken` in this file _before_ doing a request. So if an earlier request refreshed the token, the next one is able to use the refreshed one. And that's it!

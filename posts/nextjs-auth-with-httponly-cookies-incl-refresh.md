---
layout: post
title: Authenticate third-party API's in Next.js using HttpOnly cookies and axios interceptors
published: true
date: '2022-02-22'
description: How to store third-party API tokens using HttpOnly, including refreshing tokens using axios request interceptors.
cover_image: 2022-01-10.jpg
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

* [set up a Next.js project](https://nextjs.org/docs/getting-started)
* authenticate the third-party API you're going to use through [Next.js API routes](https://nextjs.org/docs/api-routes/introduction).
* understand the logic to refresh your tokens for your third-party API.

### Storing your tokens inside HttpOnly cookies

To securely store the third-party API tokens, we'll use HttpOnly cookies. To read more about the security they can provide, [check out the docs at MDN.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies).

> **To figure out yourself:**
>
>To start, make sure you have your Next.js project setup with a server that manages getting the tokens from your third-party API. I'm assuming you've created your own endpoint in the `pages/api` folder. For this example, I'll call the file `getToken.js`.

We're going to use the [cookie](https://www.npmjs.com/package/cookie) library to help deal with setting our cookies. To add it to our project:

```shell
$ npm install cookie

// or

$ yarn add cookie

```

We will create our cookies in the `getToken.js` file. After getting your tokens, use the `res` parameter that is exposed from the request handler in the `get-token` endpoint.

```js
// pages/api/getToken.js

// --- all the logic you wrote yourself to get the access_token

res.setHeader('Set-Cookie', [
  cookie.serialize('accessToken', access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24,
    sameSite: 'strict',
    path: '/'
  })
  cookie.serialize('refreshToken', refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 60 * 60 * 24,
    sameSite: 'strict',
    path: '/'
  })
]);
```

To enable these cookies as HttpOnly, we set `httpOnly: true`. To only allow access through HTTPS protocol, add `secure: process.env.NODE_ENV !== 'development'`. Currently, HTTPS is usually not used on `localhost`, so  we set it up to only use `secure: true` on production. If you're curious about this, you can [read up on it on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies).

Set `maxAge: 60 * 60 * 24`, to define the amount of seconds before the cookie expires. In this case it sets it to 24 hours. This will force the token to be invalidated after 24 hours.

Add this logic for all the cookies you want to set. Eventually the endpoint will look something like this:

```js
// pages/api/getToken.js
import axios from 'axios';
import cookie from 'cookie';

const getToken = async (req, res) => { // we use this 'res' parameter to set the cookies.

  // any logic you need to get your tokens, including

  const options = {
    // all necessary options for getting the right tokens
  };

  const fetchData = () =>
    axios(options)
      .then(async response => {
        const { access_token, refresh_token } = response.data;

        res.setHeader('Set-Cookie', [
          cookie.serialize('accessToken', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
            path: '/'
          }),
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
        res.end(JSON.stringify({ access_token, refresh_token }));
      })
      .catch(error => {
        // logic for handling errors
      });

  await fetchData();
};

export default getToken;
```

If you want to ever use these cookies, you can find them on the `req` object on any call to your Next.js server. They will be available in `req.cookies`.

### Encrypting our refresh token

Because a refresh token is an important part of the authentication flow, we'll add an extra layer of security by encrypting it. We will use the library [`crypto-js`](https://www.npmjs.com/package/crypto-js) for this. This library can help us encrypt our token using an 'encryption key' or password. This password will only be available to our server. This way the server is able to encrypt and decrypt the token.

```shell
$ npm install crypto-js

// or

$ yarn add crypto-js

```

In our `env.local` file (which we do not commit!) we add an environment variable with a encryption key of approximately 32 characters. Make sure this key is truly random.

```env
// .env.local
ENCRYPT_KEY=theverylongpasswordwith32characters
```

In the `getToken.js` file, import `AES` from `crypto-js/aes`. In the object where we set `refreshToken`, use the `encode` key in the cookie object to pass the function that will encrypt the token:

```js
// pages/api/getToken.js

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

- Create an endpoint that grabs the token from our cookies.
- Create our own axios instance and add a request and response interceptor to it.
- Use this axios instance everywhere we are doing calls that use a token.

This way, if an endpoint is using a token to get data, and receives an `401 Unauthorized`, we can handle this by refreshing our token. Let's break this down:

Create an endpoint inside the `api` folder to grab the token from our cookie.

```js
// api/getToken.js

const getToken = async (req, res) => {
  const { accessToken } = req.cookies; // we are able to get our cookies from our request object.

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ accessToken }));
};

export default getToken;
```

Then we create our own axios instance inside a file called `axios-instance.js`:

```js
// axios-instance.js
import axios from 'axios';

const axiosInstance = axios.create();

export default axiosInstance;
```

To add our interceptor logic we'll start with the response interceptor. Whenever we get a response from an API we check if it is `401 Unauthorized`. If that is the case we refresh the token and try the call again. To do this we'll be using [axios-auth-refresh](https://www.npmjs.com/package/axios-auth-refresh) which makes it really easy to set this up.

Add the library:

```js
npm install 'axios-auth-refresh'

// or

yarn add 'axios-auth-refresh'

```

Inside the `axios-instance.js` file, import `createAuthRefreshInterceptor`. Then create a `refreshAuthLogic` function. This function has a failedRequest parameter that we receive from our interceptor.

>**To figure out yourself:**
>
>Now it's up to you to create a function we can call that handles refreshing the access token from your third-party API. You can grab the refresh token from `req.cookies`. Don't forget to decrypt it like I showed you before!

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

>**To figure out yourself:**
>
>Something to keep in mind for the `refreshAccessToken` logic that you'll be creating yourself to get your refreshed token, is that you're going to have to make sure you also set these new tokens as cookies. You can use the same logic as we have used before for that.

This solution works if you are doing just one call at a time. It will refresh the token, set the token in our cookies and try the call again. After that, if you do a brand new call, it will use the updated token from the cookie.

But if you are doing multiple calls at the same time, we run into a problem.

**Example**

Let's say I'm using the [Spotify API](https://developer.spotify.com/documentation/web-api/) and I've got a list of 10 artist. For each artists I want to do a call to get more information on them:

```js
Promise.all(tenArtists.map(artist => doCall(artist)));
```

Each call will start off with the old token, and will try to use it when doing its call. It will get a response with `401 Unauthorized` and refresh the token, set the new cookie and try again. This will happen again and again 10 times. This is because all of these calls started off with the old token, which does not get updated after the first call has refreshed it. So let's fix this.

Inside our `axios-instance.js` file, we're going to create a `let requestToken;` empty variable. Then inside `refreshAuthLogic`, we assign the refreshed token to `requestToken`. This way, `requestToken` will always be up to date with the latest version of our token.

After this we're going to set our own request interceptor. we tell it to check if `requestToken` is empty or not. If it is empty, we'll use the endpoint we made in the beginning to get the token from our cookies. If it is not empty, we use that token as our authorization header:

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
    const { accessToken } = await axios
      .get('/api/getToken')
      .then(({ data }) => data)
      .catch(error => Promise.reject(error.response.data));

    requestToken = accessToken;
  }

  request.headers.Authorization = `Bearer ${requestToken}`;
  return request;
});

export default axiosInstance;
```

From this point on, any request that is made using the axios instance, will grab the authorization token from the `let requestToken` in this file _before_ doing a request. So if an earlier request refreshed the token, the next one is able to use the refreshed one.

And that's it! This solution hardly feels perfect for me. But for an app that has a lot of client-side calls, without a real database and trying to use HttpOnly cookies, this was one of the solutions I was able to come up with.

---
layout: post
title: 'TIL: How to set security headers for Gatsby Develop'
published: true
oldBlog: true
date: '2021-09-25'
description: If, for any reason, you need to run gatsby develop and set security headers. Using advanced proxying is the way to go.
intro:
cover_image: 2021-09-25.jpg
cover_image_alt: a white cat napping
faq:
  [
    {
      question: 'How can I set security headers for the Gatsby Develop script?',
      answer: "You can use Gatsby's developMiddleware in gatsby-config.js to set different headers on the response object"
    }
  ]
---

Photo by [Henry & Co](https://unsplash.com/@hngstrm) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

There might come a time that you want to run your [Gatsby](https://www.gatsbyjs.com/) app with security headers in development. To do this, you can utilize advanced proxying. Gatsby has a way to expose the [Express.js](https://expressjs.com/) development server it uses to run the app whenever you use `gatsby develop`. This way you can add Express middleware.

## TL;DR

If you just want to get your solution, feel free to use this setup inside your `gatsby-config.js` to set any security header you want. This example shows how you could set the `X-Frame-Options` HTTP response header to DENY.

```js
// gatsby-config.js

module.exports = {
  developMiddleware: app => {
    app.use((req, res, next) => {
      res.set('X-Frame-Options', 'DENY');
      next();
    });
  }
};
```

## Let's break it down

First we make sure we actually have a `gatsby-config.js` file. This file should be in the root of your Gatsby project and it can contain a bunch of different information. If you want to know more about this file, check out [Gatsby's own docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/).

```js
// gatsby-config.js

module.exports = {
  // an empty config file!
};
```

### Using developMiddleware

To expose Express.js we use the configuration key called `developMiddleware`. We pass it a function that takes a parameter called `app`. We can use that to [add middleware](https://expressjs.com/en/guide/using-middleware.html) to Express.js.

We use `app.use()` and pass it a function that takes `req, res, next` parameters. Inside the function we set our security header on the `res` (response) object. After this, we call the next function that we got as a parameter.

```js
// gatsby-config.js

module.exports = {
  developMiddleware: app => {
    app.use((req, res, next) => {
      res.set('X-Frame-Options', 'DENY');
      next();
    });
  }
};
```

Done! You should now be able to run `gatsby develop` and see the proper security headers on the documents that it serves you. Make sure to restart your server if you already had it running though, otherwise the changes won't come through.

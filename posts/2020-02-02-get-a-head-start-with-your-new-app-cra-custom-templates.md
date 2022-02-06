---
layout: post
title: Get a head start with your new app - CRA custom templates
published: true
oldBlog: true
description: Let's take a look at Create React App's custom templates
tags: #react #javascript #npm #beginner
intro: Create React App (CRA) already increases the speed of getting a new React app up and running. You run one script and it creates a functioning React app that you can start working on. With Custom Templates things have become even easier. In this post, we're going to discover what goes into creating a custom template.

---

Custom templates became available with `react-scripts@3.3.0`. They make it possible to predefine exactly what you want CRA's output to be. For example, maybe you want a few basic components ready, have some dependencies or scripts pre-installed in your `package.json` or add some config files for ESlint or Prettier.

## CRA Templates dissected

Templates are nothing more than npm packages exporting specific configuration options for CRA + an example of what the generated app should look like.

I'm going to dive a little deeper into [the example](https://create-react-app.dev/docs/custom-templates/) from CRA's documentation.

When we look at the folder structure of a custom template, it looks something like this:

```
my-cra-template
├── README.md // the readme of the custom template package itself
├── template.json // more on this file later
├── package.json // the package.json for the custom template package itself
└── template //more on this folder later
    ├── README.md
    ├── gitignore
    └── public
       └── index.html
    └── src
       └── index.js (or index.tsx)
```

The `my-cra-template` folder contains a `README.md`, `template.json` and `package.json`. These all belong specifically to the CRA template package that you are trying to make. The `README.md` contains info about the package and the `package.json` has package info for npm. You can put whatever you want in your `package.json`, just make sure your package's name starts with `cra-template-...`.

## What creates the template
The `template.json` file and the `template` folder are the pieces that actually tell CRA what to generate:

The `template.json` file is the place where we define the following:
* **Dependencies** - the dependencies you want CRA to install in any new app.
* **Scripts** - any scripts that you want CRA to put in the `package.json` file of any new app it creates with this template.

For now, it is not yet possible to add any `devDependencies` to the template. To make it easy for the user to add those, you can always specify them inside your package's readme so they can copy and paste it quickly.

The `template` folder essentially holds an example of how you want the generated app to look like. An easy way to create it is by creating a new app with CRA, modify it exactly the way you like. You could add some configuration files (like .eslintrc for example) or specify a folder structure with files. Then copy it into the `templates` and inside that folder:

* turn `.gitignore` into `gitignore`
* remove the `package.json` and lockfile
* customize how you would like the generated app's `README.md` to look like.

Make sure you at least have the minimum files inside your `templates` folder that the [CRA documentation](https://create-react-app.dev/docs/custom-templates/) specifies.

Like mentioned above; CRA has two default templates that you can look into to understand how it works:

* [cra-template-typescript](https://github.com/facebook/create-react-app/tree/master/packages/cra-template-typescript)
* [cra-template](https://github.com/facebook/create-react-app/tree/master/packages/cra-template)

And that's it! If you want to see how other people did this, check out all the [available packages](https://www.npmjs.com/search?q=cra-template-*) on npm.

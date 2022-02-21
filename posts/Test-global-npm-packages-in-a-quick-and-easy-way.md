---
layout: post
title: Test global npm packages in a quick and easy way
published: true
oldBlog: true
date: '2020-06-16'
description: A quick guide on testing out local global npm packages line using npm or yarn.
intro: You might already be used to creating symlinks between projects locally using yarn or npm. But what if you are  working on a cli package that you want the user to use globally? You also want to be able to test your package locally to make sure everything is working as it should. But how do you do this? Here’s an easy guide on achieving a link to a local project to test out globally in your command line using either yarn or npm.
tags: beginner, javascript, npm-and-yarn
cover_image: 2020-06-16.png
cover_image_alt: illustration of chains
---

## How do you link projects?

Let’s say you are working on a React app and you have another project, like a component library, that you are also working on at the same time. You want to make changes in your component library and test them out in your React app without first having to deploy the entire package right? Let’s talk about how you can actually do this. Please don’t forget: the React app and component library are examples. You can do this with any project.

### 1. Making your package available

First we need to make the package (in our example a component library) available in your local system by going into its folder using your terminal and running:

```shell
# yarn
yarn link

# npm
npm link
```


**What does this do?**

This command creates a symlink to our package in a specific location. You can see them in the location by going to the location:

```shell
# yarn
cd ~/.config/yarn/link

# npm
# first figure out where your npm packages are saved by running

npm config ls -l

# find the ‘prefix’ key
# you can find where your packages are saved in

cd {prefix}/lib/node_modules
```

Then run `ls` to see a list of all the packages that are installed.


> **You keep talking about symlinks. What are those?**
> A symlink (or ‘symbolic link’) is a file that has a reference to another file. You can also explain it as being a file that points to another file, or you can see it as a ‘shortcut’ on your computer.
>
>When you create a symlink you are telling your computer to create a link to file A. This link is saved in file B. When we want to use file B, we are essentially using file A.

### 2. Linking to your package

We now go to the project where you want to use the package (in our example the React app). In here we run

```shell
# yarn
yarn link <package name>

# So, let’s say that your package’s name is ‘catpaws’ you will do
yarn link “catpaws”

# npm
npm link <package name>

# So, let’s say that your package’s name is ‘catpaws’ you will do
npm link “catpaws”
```

Awesome.

Your project now has its package linked locally so you can test everything out. Are you done testing? Then make sure to unlink the package in your project folder by running:

```shell
# yarn
yarn unlink <package name>

# npm
npm unlink <package name>
```

And remove the package from the symlinks list by going to the folder of your package and running:

```shell
# yarn
yarn unlink

# npm
npm unlink
```


## How to link to your package globally?

So it’s all great to know how to create local links between projects, but how about when you don’t have a project, but your computer that needs to globally link to your local package? Well, it’s actually a bit different, but still super easy. First, let’s check which packages you already have installed globally by running:

```shell
# yarn
yarn global list

# yarn
npm ls -g --depth=0 --link=true
```

You should get a nice overview of stuff that is already installed.

### 1. Link to your package.

**yarn**
In your terminal, run `yarn global add /full/path/to/package`.
If we now run `yarn global list` again, we should see the name of our package in the list.

If you want to remove it you simply run `yarn global remove “package name”`.

Now there is a tricky part here. Yarn does not fully seem to support globally linking to local packages yet so the way we do this is actually a bit hacky. You see, yarn does not automatically update the package you have added, so for each change you want to test, you have to add it again...

It's easier with npm:

**npm**
With npm it it the same as before, but we just go to the folder of our package and run `npm link`.

If you now run `npm ls -g --depth=0 --link=true` you’ll see that your package is in the list.

You remove it from the list by going into the package folder and running `npm unlink`.

## Conclusion
Using either yarn or npm, once you know how, it can be easy to create symlinks to test any package between projects, or in global mode. Right now, npm seems to have the easiest workflow.

I got stuck the first time I had to develop something that I wanted to test globally and it took me some time to figure out how to make this work. I hope this helps others who might encounter the same problem. If you have any other way to do this please share them in the comments so we can all learn from it 👍.

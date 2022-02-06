---
layout: post
title: Personalize your Linux terminal prompt ✨
published: true
oldBlog: true
description: Add your own personal touch to your Linux terminal when you're not using a GUI.
tags: #linux #beginner
intro: If you're just as much of a fan of personalizing your coding environment as I am, you must have been just as bummed out when you ran your Linux environment without a GUI and found out there was no real 'theming' going on in your terminal. No worries, there is hope!

---

In this blog, I'll explain how you can change the terminal's prompt to look just the way you want to.

## What is the PS1 variable?

When looking at our terminal we can see the command prompt. Depending on your system it will have some information in there. In the case of a standard Raspberry Pi it might look something like this:

```bash
pi@raspberrypi:~ $
```

The part `pi@raspberrypi:~ $ ` is actually a shell variable called `PS1`. There are actually five of these variables. `PS0`, `PS1`, `PS2`, `PS3`, `PS4`. Each of them is set up in a different way. To find out more about these variables you can look it up in _the manual_ 📖 (`$ man bash`) underneath `Shell Variables`.

## How is PS1 set up?

We can see how the variable is set up by typing

```bash
$ echo $PS1
```
This will return `\\u@\\h:\\W\\a\\] $` in our example. The characters here actually represent a few things.

The `PS1` variable in our example consists of:

* **\\u = pi** - the username
* **@** - the character `@`
* **\\h = raspberrypi** - the hostname
* **:** - the character `:`
* **\\W = ~~** - the current working directory
* **\\a]** - an ASCII bell character
* ** $** - a space and the `$` character

There are many of these characters that you can use. It's easy to find them by opening the bash manual (`man bash`) and searching for `PROMPTING`. It will give you a list of available backslash-escaped special characters.

We can change this variable very easily. Let's set it up to only show the username and current working directory:

```
$ PS1=\"\\u [\\w]: \"
```

## Using colors

We can also use different colors in our Prompt. To check out what options we have, we can find them using `man terminal colors`. You'll find a list of available colors there:

```
0 to restore default color

1 for brighter colors
4 for underlined text
5 for flashing text
30 for black foreground
31 for red foreground
32 for green foreground
33 for yellow (or brown) foreground
34 for blue foreground
35 for purple foreground
36 for cyan foreground
37 for white (or gray) foreground
40 for black background
41 for red background
42 for green background
43 for yellow (or brown) background
44 for blue background
45 for purple background
46 for cyan background
47 for white (or gray) background
```

We can set a foreground and background color for our prompt. For example, let's turn the background purple and the foreground a white color.

Inside your terminal type:

```
$ PS1=\"\\e[45;37m\\ \\u [\\w]:\\e[0m \"
```

Let's look at the first part `\\e[45;37m`.
* `\\e[` tells bash that we are giving new color information
* `45` the background color purple
* `;` just a separation between the colors
* `37` the foreground color white
* `m` indicates the end of the color definitions

Knowing this, we can also see that the end part `\\e[0m ` resets everything back to default. To see what happens if we keep this out, try setting it without the end part.

Now for the last personalization...

## Using special characters

Let's spice it up a bit more by adding a few more bits and bobs. (Get it? bits? No? Alrighty...).

I want to use a few special characters to give a fading look, `▓`, `▒` and `░`. In order to include these in the `PS1` variable, we're going to need their octal numbers. I used [Graphemica.com](http://graphemica.com/unicode/characters) to find the octal numbers.

* ▓ = `\\342\\226\\223`
* ▒ = `\\342\\226\\222`
* ░ = `\\342\\226\\221`

When we want to put them together we just chain the numbers: `\\342\\226\\223\\342\\226\\222\\342\\226\\221`. We also want to set the right colors. So we'll turn the foreground color purple and the background color back to default by adding `\\e[0;35m`. We add this right after the working directory character as such:

```
$ PS1=\"\\e[45;37m \\u [\\w]\\e[0;35m\\342\\226\\223\\342\\226\\222\\342\\226\\221:\\e[0m \"
```
This will set up us with something looking like this:

![The end result](https://dev-to-uploads.s3.amazonaws.com/i/1ihzx5aquvinnreuo2xa.png)

Of course, there are other creative things you can do and other characters you can use.

## Setting it in your bash files

Now that we have something fun set up, let's make sure it is permanent. You can do this by setting this variable in your `~/.bashrc` or `~/.bash_profile`:

```
PS1="\e[45;37m \u [\w]\e[0;35m\342\226\223\342\226\222\342\226\221:\e[0m"
```

And that's it! This way, your prompt will look this way, even if you restart your computer.

I'm really curious about other awesome ways there are to personalize the terminal. And also to see what types of combinations people can come up with to personalize their prompt, so please share your creations!

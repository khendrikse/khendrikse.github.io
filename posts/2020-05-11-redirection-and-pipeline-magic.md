---
layout: post
title: Redirection and pipeline magic
published: true
oldBlog: true
description: For when you don't feel like diving deep into bash but do want to know what redirection is when you see it.
intro: Enough developers out there deliver great day-to-day work without having to touch bash whatsoever. Yet, every now and then we all encounter a piece of bash script, be it from a colleague or copied from a Stack Overflow post. Yeah, the script works, but do we understand what is happening? I wanted to know myself so I started small. Let's dive into redirection.
tags: #bash #linux #beginner #til
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/sp68ef6310avveg2dxjp.png
cover_image_alt: illustration of lines and arrows going in different directions
---

## Redirection

A program that runs in the command line always has three important ways to connect with it; the input, output, and possible error output of the program. We call these types of connections data- or file streams.

Examples:

- The _input_ of a program can be a keyboard or the output of another command, file, or program.
- Examples of the _output_ or _error output_ could be another file or the terminal.

These three file streams have specific names and even values. These values are called 'file descriptors'. File descriptors are nothing more than numbers that are given to specific files. These three, have the numbers 0 to 2:

| Name            | Symbolic name | File descriptor | Sign | Default  |
| --------------- | ------------- | :-------------: | :--: | -------- |
| Standard input  | stdin         |        0        |  <   | Keyboard |
| Standard output | stdout        |        1        |  >   | Terminal |
| Standard error  | stderr        |        2        |  2>  | Terminal |

We can change the sources of these streams. This is what we call redirection.

_Example_

Let's say we have a list of animals in a file called `animals.txt`.

```text
puppy
kangaroo
kitten
snake
wombat
tiger
bird
```

What if we want to sort this list and save the outcome to a new file?

```
$ sort < animals.txt > sortedAnimals.txt
```

We call the `sort` command and give it `animals.txt` as input by using the `<` symbol. Then we set the `sortedAnimals.txt` file as the output by using the `>` symbol.

When we open the `sortedAnimals.txt` file we will find:

```text
bird
kangaroo
kitten
puppy
snake
tiger
wombat
```

Now, what if we wanted to sort a file that does not exist? For example:

```shell
$ sort < ghostFile.txt > sortedGhostFile.txt
-bash: ghostFile.txt: No such file or directory
```

We get an error thrown into the terminal. Of course, this is good because we want to get feedback on why something is not working. But what if we didn’t want the error to be thrown into the terminal, but written to a file? We could redirect the standard error (`stderr`) to a file as well:

```shell
$ sort 2> sortedGhostFileError.txt < ghostFile.txt
```

We first say where the `stderr` of `sort` needs to direct to with the 2> sign. Then we say that `ghostFile.txt` needs to be input for the sort command by using the `<` sign. If you were to check, you would see that the file `sortedGhostFileError.txt` has been created and it contains the same error we saw printed into the terminal before.

You can also write the standard output and standard error to the same file. There are two ways to do this.

```shell
$ sort > ghostFileOutput.txt 2>&1 < ghostFile.txt
```

We first define that `ghostFileOutput.txt` is the output, and then use the `2>&1` sign to redirect the standard error (2) to standard output (1).

You can also use the shorthand:

```shell
$ sort &> ghostFileOutput.txt < ghostFile.txt
```

## Pipelines

Our next step in understanding redirection is by understanding ‘Pipelines’. The pipe operator `|` lets us chain different commands together. This can be very useful. It lets us write small programs or commands, and chain them to let them perform more complex tasks. With the pipe symbol, you can use the output of one command as the input of the next.

Let's say that we want to use the same `list.txt` we had before. We want to sort the list and grab the animal that is first in the list after sorting. We could do:

```shell
$ sort animals.txt | head -1
```

This will first sort the `list.txt` file, use the outcome of that as the input of the `head -1` command, which will grab only the first line of the input it gets. As we have not specified what output the last command should have, it just prints `bird` to the terminal. As it is the first animal in the sorted list.

We could also save that animal as a separate file by combining our pipe symbol with one of the redirection symbols:

```shell
$ sort animals.txt | head -1 > first-animal.txt
```

This will save the outcome to a file called `first-animal.txt`.

## Redirection summary

So, a file can have input, output, and error output. We can explicitly say where these three need to point at. This is possible by using different signs or operators. Including `<`, `>`, `2>`, and the pipe operator `|`. If you want to read more about this try typing `man bash` in your terminal and search for `/REDIRECTION`. Other than that, try it out yourself by fiddling around in your terminal. Have fun!

Do you know an interesting fact about redirection? Make sure to share it in the comments below!

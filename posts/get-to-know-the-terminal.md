---
layout: post
title: 'Get to know the terminal'
published: true
oldBlog: true
date: '2021-08-16'
description: Learn to understand the difference between the terminal, command line and shell. And become more comfortable using them.
intro: Once you start coding there will come a time you are introduced to the terminal. Opening this hacker looking window on your computer can be daunting at first. But things become less scary once we get to know the terminal better.
cover_image: 2021-08-16.jpg
cover_image_alt: a cozy coffee
---

Photo by [Clay Banks](https://unsplash.com/@claybanks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


First things first: the words 'terminal' and 'command line' are often used interchangeably. Both are text based ways to help you navigate and interact with your operating system. But what is actually the difference between the terminal, command line and shell?

## Terminology

### Interface

A way for things to exchange information. An interface can be between hardware and software, but also between computer and human. Your operating system gives you multiple interfaces to interact with it. One of them you are probably using right now: a Graphical User Interface (GUI). This is everything you see on your screen. There is also the Command Line Interface (CLI), which is a text-based way of interacting with your computer.

### Command Line

This is a series of words that you enter as a line of text. These words together form a command. In the rest of this article I'll refer to this as 'a command'.

### Command Line Interface (CLI)

Notice the word _interface_? The Command Line Interface, or CLI, is an _interface_ where we can enter our _command lines_. Once we have entered our command, we press the return key to input it into our CLI.

### Interpreter

An interpreter is like a translator. Computers speak a different language than we do. This is why an interpreter translates commands, and passes them on to the computer in a language the computer can understand.

### Shell

The shell is one of those _interpreters_. It translates the command you entered through the CLI into something the computer understands. There are different types of shells. Some examples are zsh, bash or cmd.exe. We will go into that a bit later on. For now, just remember they help translate our commands into computer-readable language.

### Terminal

The terminal is an environment that runs (or executes, or in other words: uses) the shell. We interact with it through the CLI. The terminal is a program on our computer, but we usually call it an 'emulator'. We open the terminal on our computer, type into the CLI that is part of the terminal and once we press the return key it sends the command to the shell so it can interpret it and tell the computer what we want it to do.

## Different terminal emulators and shells

There are a bunch of different terminal emulators. It depends on the operating system, and your personal preference which one you use. Operating systems come with a default terminal emulator. If you want to use another you have to install it yourself. For example: macOS has the Terminal app installed by default. For Ubuntu and Fedora it's gnome-terminal and Microsoft Windows has Windows Command Prompt.

Terminals can use different shells to interpret commands that are entered through the CLI of the terminal. Usually a terminal uses the shell that is default for the operating system. Nowadays macOS uses zsh, Ubuntu and Fedora use Bash and Microsoft Windows uses cmd.exe by default.

| Terminal Emulator      | Operating System                         | Default shell                         |
| ---------------------- | ---------------------------------------- | ------------------------------------- |
| Terminal               | macOS (default)                          | zsh                                   |
| iTerm                  | macOS                                    | the default of your OS (usually zsh)  |
| Hyper                  | macOS, Microsoft Windows, Debian, Fedora | the default of your OS                |
| gnome-terminal         | Ubuntu (default), Fedora (default)       | the default of your OS (usually Bash) |
| Windows Command Prompt | Microsoft Windows (default)              | cmd.exe                               |
| Windows Terminal       | Microsoft Windows                        | Powershell                            |

## Why is this important?

The way you interact within your terminal differs greatly depending on the type of shell your terminal is using. When you are learning new commands, the words you need to use can differ depending on the shell that is used in the terminal. For example, in zsh and bash you can create a new directory (or folder) by typing the command `mkdir newDirectoryName` where in cmd.exe you would write `md newDirectoryName`.

## What can you do with the terminal?

We've learned that a terminal is an emulator that we can open on our computer to enter commands through the CLI. That CLI passes commands to the shell that interprets them and tells the computer what to do.

Some examples of things you can do with a terminal are: writing commands to navigate files and folders (also called directories) on your computer, make directories and files and look at their content. Or install apps and programs and use them (which we call 'running'). It's also possible to fetch data from a source online and do something with that data. The uses are endless!

While you're on the journey to learn more about programming you'll find a lot of uses for the terminal, its CLI and the shell that interprets the commands you're typing. There is a lot to learn, but hopefully this has given you a good basis to start from. Have fun coding!

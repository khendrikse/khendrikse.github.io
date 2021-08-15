# Get comfortable with your terminal

Once you start coding there will come a time you are introduced to the idea of a 'terminal' or the 'command line'. Opening this black window on your computer can be daunting at first. But just like any other concept, things become easier and less scary once we get to know it a bit. Let's get on a first-name basis with the terminal.

First things first: the words 'terminal' and 'command line' are often used interchangeably. Both are text based ways to help you navigate and interact with your operating system. But what is actually the difference between the terminal, command line and shell? Let's really dive deep into the terminology:

## Terminology

### Interface

A way for things to exchange information. An interface can (for example) be between hardware and software, but also between a computer and a human. Your operating system on your computer gives you multiple ways to interact with it. One of them you are probably using right now: a graphical user interface (GUI). This is everything you see on your screen. There is also the Command Line, or Command Line Interface (CLI), which is a text-based way of interacting with your computer.

### Command Line

This is a series of words that you enter in as line of text. These words together form a command. In the rest of this article I'll refer to this as 'a command'.

### Command Line Interface (CLI)

One step further than the Command Line, is the Command Line Interface. Notice the word _interface_? The Command Line Interface, or CLI, is an _interface_ where we can enter our _command lines_. Once we have entered our command line, we press the return key to input it into our CLI.

### Interpreter

An interpreter is like a translator. It takes a collection of words and phrases (or command), and translates them into something the computer can understand. Computers speak a different language than we do, so it is wonderful that we have interpreters to help translate our commands into something the computer understands.

### Shell

The shell is one of those interpreters. It translates the command you entered through the CLI into something the computer understands. There are different types of shells. We will go into that a bit later on. For now, just remember they help translate our commands into computer-readable language.

### Terminal

The terminal is an environment where we run the shell, and interact with it through the CLI. This is a program on our computer, but we call it an 'emulator'. We open the terminal on our computers so we can type into the CLI that is inside the terminal to send commands to the shell so it can interpret it and tell the computer what to do.

## What can you do with a terminal?

As we've seen a terminal is just an emulator (program) that we can open to put commands into using a CLI. That CLI is sending those commands to our shell so it can tell the computer what to do. But what do you use your terminal for? What types of commands could you give to do what?

### Navigating your computer

Using your terminal you can navigate your computer just as you would normally. But instead of using Windows Explorer (or File Explorer), Finder or a File Manager like Nautilus, you use your terminal. An example would be going to a folder (which we will call directory from now on). Instead of using your mouse to open a directory, you would point your terminal to it using a command like this:

| Command         | Terminal and shell         | Operating System  |
| --------------- | -------------------------- | ----------------- |
| `cd FolderName` | Terminal, zsh              | macOs             |
| `cd FolderName` | gnome-terminal, bash       | Ubuntu            |
| `cd FolderName`  | Microsoft Console, cmd.exe | Microsoft Windows |

## Different terminal emulators and shells

There are a bunch of different terminal emulators. It depends on the operating system you are using, and your personal preference which one you would use. Some operating systems come with a default terminal emulator, others you can install yourself. For example: macOs has the Terminal app installed by default. For Ubuntu and Fedora it's gnome-terminal and Microsoft Windows has Windows Console.

Each terminal can use a different shell to interpret commands with that are entered through the CLI of the terminal. Usually this is the default shell used for the operating system. MacOs usually uses zsh, Ubuntu and Fedora use Bash and Microsoft Windows uses cmd.exe by default.

| Terminal Emulator | Operating System                         | Default shell                         |
| ----------------- | ---------------------------------------- | ------------------------------------- |
| Terminal          | macOs (default)                          | zsh                                   |
| iTerm             | macOs                                    | the default of your OS (usually zsh)  |
| Hyper             | maxOs, Microsoft Windows, Debian, Fedora | the default of your OS                |
| gnome-terminal    | Ubuntu (default), Fedora (default)       | the default of your OS (usually Bash) |
| Windows Console   | Microsoft Windows (default)              | cmd.exe                               |
| Windows Terminal  | Microsoft Windows                        | Powershell                            |

## Why is this important?

The way you interact within your terminal differs greatly depending on the type of shell your terminal is using.
different terminal emulators
every one has a different shell so that is why you sometimes use different commands.

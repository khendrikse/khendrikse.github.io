---
layout: post
title: Light up LEDs when you start your Raspberry Pi and clear them on shutdown
published: true
oldBlog: true
date: '2020-02-02'
description: Set up your Pimoroni Blinkt so it automatically turns on and off when you start-up or shut down your Raspberry Pi.
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/5o1drx3yby1z853rjm8d.JPG
cover_image_alt: a raspberry pi with blue and purple LEDs lighting up
tags: #linux #raspberrypi #beginner #python
intro: In the last post we set up a small script to light up the Blinkt with beautiful purple-blue lights. In this post we're going to automatically run a script when we turn the Pi on and stop and clear the LEDs when we turn it off.
---

_You can actually use the techniques in this tutorial for any other script or board._

## Start the script when the Pi turns on

There are many different ways to start running a script when the Pi is booting up. We are going to use `crontab`.

With `crontab` we can automate running a script at a certain moment. There are different options, such as running a script `yearly`, `daily` or on `reboot`. We will be using that last option 😉.

Make sure to be logged into your Pi and in the terminal run:

```bash
$ crontab -e
```

This will open `crontab` in your editor. At the bottom of the file add:

```bash
@reboot python /home/pi/Pimoroni/blue_purple.py &
```

We use `@reboot` to tell the `crontab` that we want to run the script whenever the device reboots. `python` is used to run the Python script and `&` makes the script run as a background script so you can use your terminal while the script is running. Make sure to add the absolute path to the script you want to run when starting up.

Save and close the file, that's it for the first part. You can now restart your Pi with `sudo reboot` and it should automatically start running your script in the background once it starts up again.

### How to kill your background process

If for any reason you want to stop the script, all you have to do is find its Process Identifier (PID) by running `ps aux | grep python` and finding the script in the list of processes. The output would look something like this:

```bash
pi         394 35.3  1.7  32420 16352 ?        S    12:09  34:34 python /home/pi/Pimoroni/blue_purple.py
pi         771  0.0  0.0   7348   492 pts/0    S+   13:46   0:00 grep --color=auto python

```

The PID is the number right next to the `pi`. In the example, it is `394` Once you have the PID run `kill 349` replacing `349` with the number of your PID.

### Turning off the LEDs and clearing them

Let's run a little test. Try shutting down your Pi while the LEDs are running. We can do that by typing:

```bash
$ sudo shutdown now
```

The Pi will shut itself down and the background script will also stop running. But you might notice that the LEDs did not clear. The Blinkt library has a function for clearing the LEDs when the script stops: `blinkt.set_clear_on_exit()`. But that only works when the script is explicitly stopped by us. On shutdown, this will have no effect. And as the Blinkt pixels seem to have memory, they will not clear unless we tell them to, or turn off the power.

So, let's fix this.

Inside our Python script we are going to add a new library called `signal` underneath our other libraries:

```py
#!/usr/bin/env python

import blinkt
import time
import numpy
import signal # new one!

```

This will import the `signal` library. This library listens for signals from the system and makes it possible to run a function when we receive a specific signal.

When our Pi shuts down, it will send a signal called `SIGTERM`. This signal is sent whenever the system is doing a soft shutdown.

If our script receives this signal, we want to clear the LEDs and exit from the Python script. So in our Python file, add:

```py
def clear_leds(signum, frame):
        blinkt.clear()
        blinkt.show()
        exit(0)

signal.signal(signal.SIGTERM, clear_leds)
```

The `clear_led` function has two arguments it automatically receives from the `signal.signal()` function. We don't really need to use that so we just keep them there. The `blinkt.clear()` clears the LEDs and the `blinkt.show()` sets the new changes to the Blinkt so they can be seen. We then exit the Python script with `exit(0)`.

By writing `signal.signal(signal.SIGTERM, clear_leds)` the script will listen for the `SIGTERM` signal. Once it receives it, it will run the `clear_leds` function.

And that's it! Reboot your system and once your LEDs are running again, try shutting the Pi off by using `sudo shutdown now`. After a second or so the LEDs should clear.

I had to find different sources to create this flow, so hopefully, this helps out anyone who wants to set it up the same way. Have fun and if you have it running, please share pictures of your awesome Pi!

**Check the [finished script](https://github.com/khendrikse/blinkt-purple-blue/blob/master/blue_purple_with_cleanup.py)**

_Sources:_
[Five ways to run a program on your Raspberry Pi at startup](https://www.dexterindustries.com/howto/run-a-program-on-your-raspberry-pi-at-startup/)
[crontab](http://man7.org/linux/man-pages/man5/crontab.5.html)
[Signal](https://docs.python.org/3/library/signal.html)
[Handling Unix Signals in Python](https://stackabuse.com/handling-unix-signals-in-python/)
[Sys exit](https://docs.python.org/2/library/sys.html)

---
layout: post
title: Beautify your Raspberry Pi with the Pimoroni Blinkt!
published: true
oldBlog: true
description: Make your Raspberry Pi shine in blue and purple colors.
cover_image: https://thepracticaldev.s3.amazonaws.com/i/jwk9ue7pvtuj151srtod.JPG
cover_image_alt: a raspberry pi with shining LED lights
tags: #raspberrypi #pimoroni #python #beginner
intro: You know those gaming PC's with their awesome LEDs spinning around? Well, I don't have one of those. But I am learning Linux on my Raspberry Pi. And I learn quicker by working on fun small side projects. So I decided to spice my Raspberry Pi up using the Pimoroni Blinkt.
---

![LEDs light up inside a Raspberry Pi](https://thepracticaldev.s3.amazonaws.com/i/q06jxjljnvamg81gclj0.gif)

**In this post we're going to write a little Python script, and in [the next post](https://dev.to/khenhey/light-up-leds-when-you-start-your-raspberry-pi-and-clear-them-on-shutdown-542) we'll turn the LEDs on as a background process at startup and switch them off again during shutdown.**

## Setting up the [Pimoroni Blinkt](https://shop.pimoroni.com/products/blinkt)

Setting up the Blinkt is quite straight-forward. First, make sure to place the Blinkt on the Raspberry Pi's 40-pin header. The rounded corners of the Blinkt should align with the Pi's rounded corner.

Make sure you are logged into your Pi and in the terminal run

```bash
$ curl https://get.pimoroni.com/blinkt | bash
```

This will install the software you'll need to run the Blinkt. We're using the [documentation](http://docs.pimoroni.com/blinkt/) to learn how to set up a linear blue/purple pattern.

Create and open a new Python file in your terminal. In my case I created one in the Pimoroni folder:

```bash
$ nano Pimoroni/blue_purple.py
```

I did this using the `nano` editor. You can also create a file another way and open it in your preferred editor.

## Import dependencies

First, we need to import the libraries we need. At the top of the file we import `blinkt` to control the LEDs, `time` to create time-outs and `numpy` to create a range of decimals later on.

```py
#!/usr/bin/env python

import blinkt
import time
import numpy

```

## Variables

Create a list of colors in RGB format. With this, I mean that we create a list of lists. Each small list contains a number for r, g, and b.

Then we use `numpy` to create a range of floats between `0` and `0.5`. The range is made with steps of `0.03`. This range will help us gradually light up each pixel.

```py
COLOR_LIST = [[0, 127, 255], [0, 0, 255], [127, 0, 255], [255, 0, 255], [255, 0, 127]]
BRIGHTNESS_RANGE = numpy.arange(0, 0.5, 0.03)
```

Add the following script to ensure that if the script stops, the LEDs clear.

```py
blinkt.set_clear_on_exit()
```

## Setting the pixels

We will create a function that takes a pixel, the RGB colors and a range of values that represent the different brightnesses as arguments. It will loop over the list of values for brightness and for every brightness value it will set a pixel with the correct color.

```py
def set_brightness(pixel, r, g, b, brightRange):
    for brightness in brightRange:
        blinkt.set_pixel(pixel, r, g, b, brightness)
	blinkt.show()
        # we need to run show after setting the pixel
        # otherwise we won't see anything change.
	time.sleep(0.01)
        # give it a little time to add a slight effect.
```

## While loop

Now we're going to get to the actual loop that is going to make our Pimoroni Blinkt light up.


We are going to start a while loop and inside loop over every color array in `COLOR_LIST`.

When we run the script inside the terminal and press `CTRL-C` it will throw a KeyboardInterrupt exception. Because we want to make sure we can stop our `While True` loop, we use `try` and listen for the exception to stop the loop.

The blinkt library has its own constant called `blinkt.NUM_PIXELS` that spits out the amount of pixels that are available on the device. For every pixel, we call the `set_brightness` function. We pass the pixel and RGB colors, together with the `BRIGHTNESS_RANGE`.


```py
try:
    while True:
        for color in COLOR_LIST:
            for pixel in range(blinkt.NUM_PIXELS):
                set_brightness(pixel, color[0], color[1], color[2], BRIGHTNESS_RANGE)
            for pixel in reversed(range(blinkt.NUM_PIXELS)):
                set_brightness(pixel, color[0], color[1], color[2], reversed(BRIGHTNESS_RANGE))
except KeyboardInterrupt:
    pass
```

Because we want the pixels to light up, and then gradually turn off again, we do a reversed for loop. See the difference between the two? We use `reversed(range(blinkt.NUM_PIXELS))` and we also send a reversed `BRIGHTNESS_RANGE`.

This is it for now! Try it out by saving the file and running it:

```bash
$ python blue_purple.py
```

To stop the script, use `CTRL-C`.

This is only the first part. In [the next post](https://dev.to/khenhey/light-up-leds-when-you-start-your-raspberry-pi-and-clear-them-on-shutdown-542), we will set up our Raspberry Pi so it starts running this script as a background process on startup, and close it when we shut the Pi down.

**Check the [finished script](https://github.com/khendrikse/blinkt-purple-blue/blob/master/blue_purple.py)**

_Sources:_
[Get started with Blinkt](https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-blinkt)
[Pimoroni Blinkt Documentation](http://docs.pimoroni.com/blinkt/#enable-disable-clear-on-exit)
[KeyboardInterrupt](http://effbot.org/zone/stupid-exceptions-keyboardinterrupt.htm)

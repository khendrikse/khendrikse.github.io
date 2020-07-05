---
layout: post
title: The basics of a function, illustrated! ✨
published: true
description: Learn about JavaScript functions with a simple metaphor.
tags: beginner, javascript, codenewbie
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/tri97q55qgtexhhakgxe.png

---

**One thing that can be difficult to understand when you just start out learning how to program is what a function is and how it works. As a beginner developer, it can be especially difficult to understand what arguments are and where they come from. This blog illustrates how a  javascript function works in its most basic form.**

## What is a function

*Functions are like small programs that are built to do a specific task.* We first create (or 'declare') this program (which we will from now on call a function). Once we are done writing it, we can start using (or 'execute') it.

It’s kind of like building a small factory. While setting up the factory we create a building. Inside this building, we set everything in place so the factory can receive whatever raw materials it needs and return whatever product we want as output.

Let’s say we want to build a factory that takes any number and adds two. From the inside the factory would look something like this:

![a factory that takes in a number and returns that number plus two](https://dev-to-uploads.s3.amazonaws.com/i/9onjc8zt7vpuommno32w.png)

We can see that the factory is expecting to get any type of number as input. Because we don’t know yet which number it might receive, we’ll just call whatever input we get `num` for ‘number’. Inside the factory, we add 2 to whatever we got as input. It then returns the output which is the combination of `num + 2`.

>### About `num`
>`num` is just a representation, or container, for what we get as input. We can even rename it into whatever we want. If we were making a factory that added two apples to a number of bananas, we could rename `num` to `bananas`. The input would be a number of bananas, the output would be a number of bananas plus two apples.

Do you see that we also gave the factory a name? `plusTwo`. This makes it a bit easier for when we want to refer to the factory. This way we can tell our workers: ‘I want you to use the factory `plusTwo` to process a specific number and add 2’.

Our factory is ready to be used now. To use it we need to provide a number as input. Let’s say we want to give it a `3` as input. We can’t see what is happening inside the factory but we can see what is returned from the factory: it’s a 5 (3 + 2 = 5):

![The outside of a factory that takes in 3 and returns 5](https://dev-to-uploads.s3.amazonaws.com/i/o65pxtvzpgwjbkccobaa.png)

## Let’s get coding

Functions essentially work the same way. Instead of building an imaginary factory, let’s actually start creating a function in JavaScript.

We first set up the function, these are like the walls of the factory. For convenience, we will also give the function a name, just like we did with the factory. We’ll call it `plusTwo`.

```js

function plusTwo( ) {

}

```

We are then going to define what we are expecting the program to get as input. We call these `arguments` or `parameters`. In this case, we are expecting to get one number. And because it can be any type of number, we’re going to give it a more generic name like `num`. We will define this argument within the two parentheses `()`. Look at it as the door that allows our input arguments to enter the function.

```js

function plusTwo(num) {

}

```

We’ll now finish the function by saying exactly what it needs to do and return. It needs to return the sum of `num` and 2. This will become the output of the function.

```js

function plusTwo(num) {
    return num + 2;
}

```

Now the function is ready to be used. It knows what it is going to get as input, and what it needs to return as output. The part where we use the word `return` is actually really important. This tells the function to `return` our output.

Otherwise, it is kind of like closing the output door to our factory: the produced results cannot leave the factory:

![The factory output door is closed and none of the product can get out](https://dev-to-uploads.s3.amazonaws.com/i/b77bysgp94758d7vx8ul.png)

>### Again, what is `num`?
>We can rename `num` into whatever we like. It is just a name that we make up to define whatever enters our function. For example, the following two functions would have the exact same result:

```js
function plusTwo(x) {
    return x + 2;
}

function plusTwoApples(numberOfApples) {
    return numberOfApples + 2;
}
```

>`x` and `numberOfApples` are simply names we give whatever arguments we are going to get. While we could use `x` as a name for our arguments, it does not tell us a lot about what we are getting. This is why we try to give it a more descriptive name.

From now on, if you want to code along, you can actually [open developer tools](https://developers.google.com/web/tools/chrome-devtools/open) on this page and first type the function that we made just now, press return on your keyboard, and follow along for the next part.

## Start using the function

We can now actually start using the function. Remember that we gave both the factory and the function a name? Just like with the factory, we can now tell our workers (in this case, our program) to use the function `plusTwo` to process a number and add 2’.

```js

plusTwo(3) // returns 5

```

We pass the number 3 into the doors that are our parentheses. In the function, this means that `num` now is a representation of 3. In our factory drawings you imagine `num` to be 3.

If we pass 5, it will return 7:

```js

plusTwo(5) // returns 7

```

Again, in our function `num` now is a representation of 5. In our factory drawings you imagine `num` to be 5.

And that’s it! There is a lot more to learn about functions, but these are the basics that should help you get on your way! I hope it helps anyone learning this for the first time to understand the concepts a bit more.




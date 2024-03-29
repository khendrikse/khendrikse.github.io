---
layout: post
title: 'Hashes are surprisingly fun'
published: true
date: '2022-03-22'
intro: I am no mathematical genius. In fact, far from it. But I’ve learned to appreciate the small things in life, like encountering a chatty cat on the street or having a cup of tea in the afternoon. And just recently I started to really appreciate hashes. Not the food, but the mathematical algorithm type. Why? Let me tell you.
tags: beginner
cover_image: 2022-03-22.jpg
cover_image_alt: a cabinet with little drawers.
---

Cover image by  [Jan Antonin Kolar](https://unsplash.com/@jankolar) on [Unsplash](https://unsplash.com/s/photos/roadmap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## What is this non-[food](https://en.wikipedia.org/wiki/Hash_(food)) hash you talk about?

First of all. What are hashes? They are the result of something called `a hash function` that maps data of any size, to a fixed-sized hash value.

> To simplify: imagine a file of a thousand characters. We could use a hash to turn it into a 10 character long string that is unique to whatever was in the original file.

There are a [bunch of different hash functions](https://en.wikipedia.org/wiki/List_of_hash_functions) out there. They do amazing math things (this is my professional description of what they do) and return a hash value. Some of these hash values are 8 characters long, others 48 or 64, you name it. It all depends on the function you choose.

## Kind of reminds me of encryption

Yeah, but hashing is not the same as encryption though. An encrypted piece of data can be decrypted again, resulting in the original piece of data.

It's different with a hash value. You cannot simply convert a hash value back into the value it was before it was hashed. (There are ways to try it, like using [Rainbow Tables](https://en.wikipedia.org/wiki/Rainbow_table), but to keep it simple: you can’t. Mkay?)

What you can do, is compare hashes! If we use a ['Fowler-Noll-Vo Hash Function'](https://en.m.wikipedia.org/wiki/Fowler–Noll–Vo_hash_function) to convert the string `Hi there` to a hash, it will result into `D08C24B3D5F93F02`.

If we hash the same string again, it will return the exact same hash value `D08C24B3D5F93F02` (fun!). But! If I change the text to `Hi there!` The hash will be totally different. In this case the hash would be `57615F9496861047`. I know, what a shocking difference for adding only one character.

## ... alright but why so excited?

Now why do I enjoy this mathematical function and what it returns? Because it is so useful! And it has been in front of my eyes all along. These are a few ways in which you might be using hashes yourself on a daily basis:

### Git

Git uses [‘Secure Hash Algorithm 1’ or SHA-1](https://en.wikipedia.org/wiki/SHA-1) to do [a few things](https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection). It uses the hash of file contents to check if the contents of a file have changed or not. But it also uses hashes as database keys to look up files and data. It makes so much sense as well. If git wants to check if a file changed, it can compare the new hash to the previous one. And if a hash has not changed, it knows that it does not need to save something again, it can just point to the already stored value. Smart!

### Password security

Instead of storing passwords in a database, apps can also store hashed passwords. Simply put you can’t convert a hash back to its original value, so if someone were to read the database, they would not be able to read the original password. And when someone wants to log in, the app would only have to compare the hashed inserted password to the hashed password in the database. Neat! If you want to read a bit more, [here is an interesting article](https://auth0.com/blog/hashing-passwords-one-way-road-to-security/).

### Caching

Hashes are also used to help the browser understand if a resource (file) has changed. This can help with optimising caching in the browser. One way a resource can implement it is with an [ETag HTTP response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag#caching_of_unchanged_resources). This resource response header will contain a hash that the client will send to the server to verify if the resource has changed or not. Efficient!

There are much more uses for hashes than just these three. But when I realised hashes pop up in different ways, I was delighted. If two hashes are the same and they were hashed using the same hash function, you can be sure the content is the same, and I think that is just lovely.

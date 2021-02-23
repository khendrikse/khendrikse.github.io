---
layout: post
title: 'Finding meaning: landmarks explained'
published: true
description: Learning more about HTML5 elements and their landmarks
intro: Have you ever done a semantic html course? Or read about it? If you have, you might remember elements like <main>, <section> or maybe <aside>. But did you know that using these elements does not automatically provide the proper semantic meaning? Let's go on a journey of creating meaningful landmarks.
tags: accessibility, html, a11y
cover_image: you-are-here.jpg
cover_image_alt: Two feet in the middle of a circle on the street that says you are here.
---
Cover image by [Fallon Michael](https://unsplash.com/@fallonmichaeltx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/you-are-here?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

## What is a landmark?

Landmarks help identify the way a web page is organised and structured. A page with well-placed landmarks can help assistive technology make sense of the structure of the page. It can also help building 'skip-links' for quick and efficient navigation through the page while maintaining  context for the person browsing the page.

Traditionally, it was possible to **explicitly** add landmark roles to HTML elements by using the `role` attribute:

```html
<div role="main">
  <h1>An old school title<h1>
  .... some amazing old school content ....
</div>
```

Thankfully, with HTML5, we get HTML5 elements that can have an **implicit** landmark role.

```html
<main>
  <h1>Sparkly new title<h1>
  .... some amazing new content ....
</main>
```

These **implicit** landmark roles have rules though. Not every one of these HTML5 elements automatically gets the correct landmark role. It all depends on wether or not the element is implemented properly.

For example:

- `<aside>` - has a `complementary` landmark role. It is meant to add supporting content to the main content.
- `<form>` - can have a `form` landmark role, but only when it is identifiable with an accessible name. It can also have a `search` landmark role if explicitly given `<form role='search'>`.
- `<header>` - can have a `banner` landmark role when used in the right context. This type of landmark role contains site-specific content or information.
- `<footer>` - can have a `contentinfo` landmark role, but only when used in a very specific way. Contentinfo is specifically the information usually found in footers like a privacy statement.
- `<main>` - has a `main` landmark role. It identifies the main content of the page, and each page should only have one.
- `<nav>` - has a `navigation` landmark role. It identifies a group of links to navigate with.
- `<section>` - can have a `region` landmark role, but only when it has an accessible name.

As you can see above, everything has a specific use and proper implementation. For example, if you are using the `<section>` element, it does not automatically add context to the page through an implicit landmark. You might have a nice structure like this:

```html
<main>
  <h1>A wonderful title<h1>
  <section>
    <h2>A cute little header in this section</h2>
    ... awesome content ...
  </section>
  <section>
    <h2>A nice header in the second section</h2>
    ... more awesome content ...
  </section>
</main>
```

This is great! But the only thing it says about the page is that there are two sections. It does not tell the visitor anything about the specific purpose of that section. Because of this, the section will not be seen as having a `region` landmark role. It's just a container surrounding some elements.

> What is a region?

> A region landmark is a perceivable section containing content that is relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page.

> [W3C on region landmarks](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/region.html)

In this case, adding a unique label to each of these sections can help them become actual `regions`. For example by using `section[aria-labelledby]`, `section[aria-label]` or `section[title]`.

## Tell me more!

If you want to know more about the specifics of landmarks, one resource that I really love is [ARIA landmarks example](https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/landmarks/index.html). It has great quick and easy examples on how the different elements and landmark roles can, and should be used.

---
title:  How to use Single Images
tags:
  - Friday Theme
  - HTML
  - images
  - Markdown
---

Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top` that ensures the image is responsive within the grid.

<div class="card mb-3">
    <img class="card-img-top" src="https://drscdn.500px.org/photo/127767019/q%3D80_m%3D1500/v2?webp=true&sig=dd1fa4580c459472969cd4992068922f311f12cf263cf08b39615cfc1812286b"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning.
        </div>
    </div>
</div>

The HTML source for this card is below, or of course you could look at the raw source for this file in the GitHub repo or on your disk after you have downloaded the repo. WHen looking at the source, you can see the Markdown mingled with the HTML.

{% highlight html %}

<div class="card mb-3">
    <img class="card-img-top" src="https://drscdn.500px.org/photo/127767019/q%3D80_m%3D1500/v2?webp=true&sig=dd1fa4580c459472969cd4992068922f311f12cf263cf08b39615cfc1812286b"/>
    <div class="card-body bg-light">
        <div class="card-text">
            The Peak District on a mosty morning.
        </div>
    </div>
</div>

{% endhighlight %}
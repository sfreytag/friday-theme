---
title:  Jekyll and Bootstrap 4 Upgrade
tags:
  - jekyll
  - theme
  - bootstrap
---
Here's how to put a single image into a post, using a Bootstrap 4 card. This shows how to mingle Markdown with HTML, too.

<!--more-->

The card allows a caption to be aligned with the photo, and the card classes contain a `card-img-top`

<div class="card mb-3">
    <img id="500px" class="card-img-top" />
    <div class="card-body bg-light">
        <div class="card-text">
            The most recent pic from my <a href="{{site.data.links.px}}">500px feed</a>:
            <span id="caption"></span>
        </div>
    </div>
</div>
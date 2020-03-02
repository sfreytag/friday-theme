---
title:  How to use Multiple Images in a Masonry-style layout
tags:
  - Friday Theme
  - HTML
  - images
  - Markdown
  - Liquid
  - Image Gallery
images:
  - https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b1016b885e7438c4633109d77368d4d&auto=format&fit=crop&w=1651&q=80
  - https://images.unsplash.com/photo-1445962125599-30f582ac21f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38c096c472ba616dc4e8e76a8069c97a&auto=format&fit=crop&w=668&q=80
  - https://images.unsplash.com/photo-1504626835342-6b01071d182e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=975855d515c9d56352ee3bfe74287f2b&auto=format&fit=crop&w=1651&q=80
  - https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=468a8c18f5d811cf03c654b653b5089e&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1506291318501-948562d765d7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71ad8e3b7b4bd210182ed5e5c024903b&auto=format&fit=crop&w=1650&q=80
  - https://images.unsplash.com/photo-1500370414137-9201565cf099?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=95e700b9e28eb7ed7b5769c823741126&auto=format&fit=crop&w=668&q=80
  - https://images.unsplash.com/photo-1500402448245-d49c5229c564?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19c590b253f803a7f9b643c59017160&auto=format&fit=crop&w=1650&q=80
---

Here's an example for multiple images that uses Bootstrap's card columns for a Masonry-like layout. It's not perfect, but with some careful ordering of the images, you can get some good results. This example also shows some Liquid tags used in conjunction with frontmatter variables to automatically create your layout.

<!--more-->

To automate the layout, a list of images is stored in a frontmatter variable. The post then loops over that list to output the cards. This is easier than copy-pasting the same HTML for each image.

Here's the card columns in action.

<div class="card-columns">
    {% for img in page.images %}
    <div class="card">
        <img class="card-img-top" src="{{ img }}" />
    </div>
    {% endfor %}
</div>

(The photos are from [Unsplash](http://www.unsplash.com)!)




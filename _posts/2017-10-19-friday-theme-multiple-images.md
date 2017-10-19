---
title:  How to use Multiple Images
tags:
  - Friday Theme
  - HTML
  - images
  - Markdown
  - Liquid
images:
  - https://drscdn.500px.org/photo/27650373/q%3D80_m%3D1500/v2?webp=true&sig=b93755ce6bc67c76727d51f8ea06e7354183b726bb39ab6923675a0f78d15340
  - https://drscdn.500px.org/photo/143841823/q%3D80_m%3D1500/v2?webp=true&sig=3c0fa3b75ac4098ca23a31d681a6bc4d2dc91877294fd966dd202aa5b5eb3688
  - https://drscdn.500px.org/photo/191261527/q%3D80_m%3D1500/v2?webp=true&sig=a87172cb288974b2e661d49fa126897151fc0568e326b1727fba380903e60c0d
  - https://drscdn.500px.org/photo/63494571/q%3D80_m%3D1500/v2?webp=true&sig=061dd3315a09b2698cf44e6cd417a3c12021201bc86eb46cfbbeeb26fafbc306
  - https://drscdn.500px.org/photo/58752896/q%3D80_m%3D1500/v2?webp=true&sig=0579a4076dc275fc34d6048a89fafc52a4e541c09e3e767abc7049389936794c
  - https://drscdn.500px.org/photo/58752894/q%3D80_m%3D1500/v2?webp=true&sig=04461c385ab36dde0926a008be5e63673452e1e4a748438161300317f7085d02
---

Here's an example for multiuple images that uses Bootstrap's card columns for a Masonry-like layout. It's not perfect, but with some careful ordering of the images, you can get some good results. THis example also shows some Liquid tags used in conjunction with frontmatter variables.

<!--more-->

Here's the card columns in action.

<div class="card-columns">
    {% for img in page.images %}
    <div class="card">
        <img class="card-img-top" src="{{ img }}" />
    </div>
    {% endfor %}
</div>




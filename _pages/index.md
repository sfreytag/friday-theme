---
layout: defaults/page
permalink: index.html
narrow: true
---

{% include components/intro.md %}

[More about John.]({{ site.baseurl}}{% link _pages/about.md %})

### What else?

John keeps himself busy on open-source and hobby projects. This is great for learning new skills. [The full list is here]({{ site.baseurl }}{% link list/projects.md %}). There's also a project page about how to [install and use this theme]({{ site.baseurl }}{% link _projects/install.md %}).

John has worked in engineering for many years and has an impressive portfolio. [Browse it here.]({{ site.baseurl }}{% link list/portfolio.html %})

John has posted a bunch of tips about how to use Friday Theme. There's the three most-recent posts below, or here's [all posts by year.]({{ site.baseurl }}{% link list/posts.html %})

<div class="card mb-3">
    <img class="card-img-top" src="https://images.unsplash.com/photo-1516358045903-b686e6bd3814?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=beab09d3410d08c33d34a47af0a7b99d&auto=format&fit=crop&w=1652&q=80"/>
    <div class="card-body bg-light">
        <div class="card-text">A picture from when John was on holiday in the Peak District.</div>
    </div>
</div>

### Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}



---
layout: defaults/page
permalink: index.html
narrow: true
---

{% include components/intro.md %}

[More about me.]({{ site.baseurl}}{% link _pages/about.md %})

##What else is here?

I'm online in a few other places. I have some open-source contributions on my [github account]({{site.data.links.github}}). I am answering JavaScript questions on my [stackoverflow profile]({{site.data.links.soprofile}}), which is useful for keeping myself up-to-date with new technologies. I have some photos on [500px]({{site.data.links.px}}).

<div class="card mb-3">
    <img id="500px" class="card-img-top" />
    <div class="card-body bg-light">
        <div class="card-text">
            The most recent pic from my <a href="{{site.data.links.px}}">500px feed</a>:
            <span id="caption"></span>
        </div>
    </div>
</div>

###Projects

I work on hobby or open-source projects, mostly [Simon Likes Maps](/projects/slm/index.html). This is a route planning tool for the great outdoors with some very capable features that are not available elsewhere. It is a great example of the kind of web app I can build. There's [more projects listed here.]({{ site.baseurl }}{% link list/projects.md %})

###Posts

I post about my projects or other bits and pieces of web development. There's the three most-recent posts below, or here's [all posts by year.]({{ site.baseurl }}{% link list/posts.html %})

###Recent Posts

{% for post in site.posts limit:3 %}
{% include components/post-card.html %}
{% endfor %}

<script type="text/javascript">
    (function() {
        $.get("https://500px.com/sifriday/rss").done(function(result) {
            var feed = $(result)
            var first = feed.find("item").first()
            var description = first.find("description").text()
            var src = $(description).find("img").attr("src")
            $("#500px").attr("src", src)

            var caption = first.find("title").text()
            var date = new Date(first.find("pubDate").text())
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            var date_string = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
            $("#caption").html("<b>" + caption + "</b> (" + date_string + ")")
        })
    })()
</script>

---
title:  How to use Icons
tags:
  - icons
  - Friday Theme
  - CSS
---

Here's how to use the Entypo icons in the Friday Theme as SVGs It's easy with Jekyll's include tag and Bootstrap 4 classes.

<!--more-->

Bootstrap 3 shipped with the Glyphicons built-in as icon files and accompanying CSS classes. Bootstrap 4 doesn't have these, but does point you to some SVG icon libraries. With Jekyll's include and Bootstrap 4's flex layout, it's easy to use the SVGs inline without writing lots of icon-related CSS.

<!--more-->

## Example

<p class="d-flex align-items-center">
    <span class="icon grey mr-2" markdown="0">
        {% include entypo/clock.svg %}
    </span>
    A clock icon in grey left-aligned
</p>

<p class="d-flex align-items-center">
    A cycle icon in red right-aligned
    <span class="icon red ml-2" markdown="0">
        {% include entypo/cycle.svg %}
    </span>
</p>

## Source

{% highlight markdown %}
{% raw %}

<p class="d-flex align-items-center">
    <span class="icon grey mr-2">
        {% include entypo/clock.svg %}
    </span>
    A clock icon in grey left-aligned
</p>

<p class="d-flex align-items-center">
    A cycle icon in red right-aligned
    <span class="icon red ml-2">
        {% include entypo/cycle.svg %}
    </span>
</p>

{% endraw %}
{% endhighlight %}

## CSS

The markup above uses `.icon` to control the icon's size and and `.red` or `.grey` as examples of controlling its colour.

Bootstrap takes care of the layout. `d-flex align-items-center` ensures the icon is vertically aligned along the center line with the accompanying content and `ml-2` and `mr-2` take care of horizontal spacing.

The following CSS is already in `theme/css/site.css` and can easily be extended for different colours.

{% highlight css %}
.icon {
    height: 21px;
    width: 21px;
}

.icon.grey svg path {
    fill: #999;
}

.icon.red svg path {
    fill: #A00;
}
{% endhighlight %}

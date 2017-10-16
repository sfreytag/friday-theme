---
layout: defaults/post
title: Add an Image to an OL3 Map
tags:
  - openlayers
  - maps
---

This post demonstrates adding an icon image to an OL3 map. 

<!--more-->

This was as an answer to [this Stack Overflow question](http://stackoverflow.com/questions/35826118/openlayers-onmousedown-load-image).

####Example

Click the map to add a new icon. Click existing icons to see their coordinates.

<script src="{{ site.baseurl }}/public/js/ol.min.js"></script>

<div id="map" style="width: 100%; height: 500px" class="mb-2"></div>

####Script

{% highlight javascript %}
{% include scripts/addfeature.js %}
{% endhighlight %}

<script type="text/javascript">
{% include scripts/addfeature.js %}
</script>

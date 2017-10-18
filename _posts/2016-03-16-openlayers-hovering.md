---
title: OL3 Feature Hovering
tags:
  - openlayers
  - maps
---

This post demonstrates hovering over features on a map and setting their borders to blue. Basically this repurposes the [OL3 Box Selection Demo](http://openlayers.org/en/v3.14.2/examples/box-selection.html) to use an `ol3.interaction.Select` interaction instead of click/drag box interactions. There's some notes at the bottom about using `map.on('pointermove')` for an alternative way of doing it.

<!--more-->

This was as an answer to [this Stack Overflow question](http://stackoverflow.com/questions/36007218/how-to-highlight-the-outline-of-an-subdivision-where-mouse-is-hovering).

####Example

<script src="{{ site.baseurl }}/public/js/ol.min.js"></script>

Move your mouse around. When you hover over a country, its border goes blue.

<div id="map" style="width: 100%; height: 500px" class="mb-2"></div>

####Script

<script type="text/javascript">
{% include scripts/hovering.js %}
</script>

{% highlight javascript %}
{% include scripts/hovering.js %}
{% endhighlight %}

An alternative approach could be to use the technique, which gives you a bit more control over styling (but does not unhover the features). It lets you access the feature directly if you want to manipulate it (eg get its coordinates, etc):

{% highlight javascript %}

var red_outline = new ol.style.Style({
    stroke: new ol.style.Stroke({
        color: 'red',
        opacity: 1,
        width: 1
    })
})

map.on("pointermove", function(event) {
    var map = event.map;
    var feature = map.forEachFeatureAtPixel(
        event.pixel, function(feature, layer) {
            return feature
        }
    )
    if (feature) {
        feature.setStyle(red_outline)
    }
})

{% endhighlight %}
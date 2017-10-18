---
title: OL3 and CAMS
tags:
  - openlayers
  - maps
---

This post demonstrates integrating the [ECMWF public CAMS WMS products](https://software.ecmwf.int/wiki/display/COPSRV/Accessing+CAMS+WMS+products) with Open Layers 3.

<!--more-->

- ECMWF = European Centre for Medium-Range Weather Forecasts
- CAMS = [Copernicus Atmosphere Monitoring Service](http://www.ecmwf.int/en/about/what-we-do/copernicus/copernicus-atmosphere-monitoring-service)

This was as an answer to [this Stack Overflow question](http://stackoverflow.com/questions/35542691/open-layers-3-reading-ecmwf-wms-layer).

The map below shows the AOD 550 data layer, which is the total aerosol optical depth at 550 nm, a measure of the total amount of particles in the atmosphere (dust, smoke, pollution, sea salt)  which block sunlight by absorbing or by scattering light. It is overlaid on an Open Street Map.

####Example

<script src="{{ site.baseurl }}/public/js/ol.min.js"></script>

<div id="map" style="width: 100%; height: 500px" class="mb-2"></div>

####Script

<script type="text/javascript">
{% include scripts/cams.js %}
</script>

{% highlight javascript %}
{% include scripts/cams.js %}
{% endhighlight %}

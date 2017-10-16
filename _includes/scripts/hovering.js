var countries = new ol.source.Vector({
    url: '{{ site.baseurl }}/public/misc/countries.geojson',
    format: new ol.format.GeoJSON()
});

var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            source: countries
        })
    ],
    renderer: 'canvas',
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});

var highlighter = new ol.interaction.Select({
    condition: ol.events.condition.pointerMove
});
map.addInteraction(highlighter);
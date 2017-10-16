var icon_style= new ol.style.Style({
    image: new ol.style.Icon({
        anchor: [0.5, 30],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '{{ site.baseurl }}/public/img/map-marker-small.png',
    })
})

var icon_layer = new ol.layer.Vector({
    source: new ol.source.Vector(),
    title: "Icons"
})

var map_layer = new ol.layer.Tile({
    source: new ol.source.OSM()
})

var map = new ol.Map({
    layers: [map_layer, icon_layer],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});

map.on("singleclick", function(event) {
    var map = event.map;
    var feature = map.forEachFeatureAtPixel(
        event.pixel, function(feature, layer) {
            return feature
        }
    )
    if (feature) {
        // You've selected an existing feature; display its coordinates.
        if (feature.get('type') == "icon") {
            alert("Coords: " + feature.get('coords'))
        }
    }
    else {
        // Add a feature
        event.coordinate

        var icon_feature = new ol.Feature({
            geometry: new ol.geom.Point(event.coordinate),
            // These are custom properties that you can add yourself.
            // Here I add a type and the coordinates, which can be retrieved
            // as shown above.
            type: 'icon',
            coords: event.coordinate
        })
        icon_feature.setStyle(icon_style)
        icon_layer.getSource().addFeature(icon_feature)
    }
})
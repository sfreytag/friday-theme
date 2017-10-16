var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            preload: Infinity,
            visible: true,
            source: new ol.source.TileWMS({
                url: 'http://apps.ecmwf.int/wms/',
                params: {'LAYERS': 'composition_aod550', 'token':'public'},
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                projection: 'EPSG:4326',
            }),
            opacity: 0.4,
        })
    ],
    target: 'map',
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});
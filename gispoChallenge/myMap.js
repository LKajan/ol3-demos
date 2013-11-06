var etrstm35fin = new ol.proj.Projection({
  code: 'EPSG:3067',
  units: ol.proj.Units.METERS
});
var extent = [20000, 6570000, 788000, 7818000];

var layers = [
  new ol.layer.Image({
    source: new ol.source.ImageWMS({
      params: {'LAYERS': 'peruskartta'},
      extent: extent,
      url: 'http://tiles.kartat.kapsi.fi/peruskartta?',
      attributions: [new ol.Attribution({
        html: '&copy; ' +
            'Kartta: <a href="http://www.maanmittauslaitos.fi">' +
            'Maanmittauslaitos</a>.' +
            'Aineistopalvelu: <a href="http://www.http://kartat.kapsi.fi">' +
            'Kartat.kapsi.fi</a>.'
      })]
    })
  })
];

var map = new ol.Map({
    renderer: ol.RendererHint.CANVAS,
  layers: layers,
  target: 'map',
  view: new ol.View2D({
    extent: extent,
    center: [323289,6981410],
    projection: etrstm35fin,
    zoom: 12
  })
});
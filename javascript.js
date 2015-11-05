function main() { 
  cartodb.createVis('map', 'https://carlos10.cartodb.com/api/v2/viz/1c7e47e6-6612-11e5-a874-0ec80481e721/viz.json', {
  shareable: true,
  title: true,
  description: true,
  search: true,
  tiles_loader: true,
  center_lat: 37,
  center_lon: 0,
  zoom: 2
  })
  .done(function(vis, layers) {
    layers[1].setInteraction(true);
    layers[1].on('featureOver', function(e, latlng, pos, data) {
      cartodb.log.log(e, latlng, pos, data);
    });
    var map = vis.getNativeMap();
    map.setZoom(5);
  })
  .error(function(err) {
    console.log(err);
  });
}
window.onload = main;

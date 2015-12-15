<!--la url incluida en createVis es la que se comparte desde cartoDB del mapa con los datos de los municipios y permite por ajax guardar
en variables las capas de los mapas extraidos de la plataforma CartoDB-->

function mainNSalas() { 		
    $("#mapaRecaudacion").hide();
		$("#mapaEspectadores").hide();
		$("#mapaNumeroSalas").show();
        cartodb.createVis('mapaNumeroSalas', '	https://carlos10.cartodb.com/api/v2/viz/1c7e47e6-6612-11e5-a874-0ec80481e721/viz.json', {
            shareable: false,
            title: false,
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

          // map.panTo([50.5, 30.5]);
        })
        <!--.error(function(err) {
          console.log(err);
        }); -->
      }
  
  function mainNEspectadores() { <!--la url incluida en createVis es la que se comparte desde cartoDB del mapa con los datos de los municipios -->
		$("#mapaRecaudacion").hide();
		$("#mapaNumeroSalas").hide();
		$("#mapaEspectadores").show();
        cartodb.createVis('mapaEspectadores', 'https://carlos10.cartodb.com/api/v2/viz/71c0d1f0-82ec-11e5-bbbd-0e787de82d45/viz.json', {
            shareable: false,
            title: false,
            description: true,
            search: true,
            tiles_loader: true,
            center_lat: 37,
            center_lon: 0,
            zoom: 2
        })
		
		
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, latlng, pos, data) {
            cartodb.log.log(e, latlng, pos, data);
          });
          var map = vis.getNativeMap();
           map.setZoom(5);

          // map.panTo([50.5, 30.5]);
        })
        <!--.error(function(err) {
          console.log(err);
        }); -->
      }
	  
	        function mainRecaudacion() { <!--la url incluida en createVis es la que se comparte desde cartoDB del mapa con los datos de los municipios -->
	  $("#mapaEspectadores").hide();
	  $("#mapaNumeroSalas").hide();
	  $("#mapaRecaudacion").show();
        cartodb.createVis('mapaRecaudacion', 'https://carlos10.cartodb.com/api/v2/viz/cab982ae-a26b-11e5-a4f8-0e3ff518bd15/viz.json',{
            shareable: false,
            title: false,
            description: true,
            search: true,
            tiles_loader: true,
            center_lat: 37,
            center_lon: 0,
            zoom: 2
        })
		
		
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, latlng, pos, data) {
            cartodb.log.log(e, latlng, pos, data);
          });
          var mapR = vis.getNativeMap();
           mapR.setZoom(5);

        })
        <!--.error(function(err) {
          console.log(err);
        }); -->
      }
  
  function cargaMapa(){ <!-- Funcion que permite crear una capa de manera dinamica a partir de una consulta SQL -->
			layer.createSubLayer({
			sql: "SELECT cartodb_id, the_geom, the_geom_webmercator, codnut1, codnut2, codnut3, country, recaudacion, inspireid, nameunit, natcode,natlevel FROM ign_spanish_adm2_provinces_copy",
			cartocss: '#ign_spanish_adm2_provinces_copy  [recaudacion>100000000] {   polygon-fill: #229A00;}'
         }); 
		  layer.show();
		  layer.setOpacity(0.1);
  }

require(["esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

  //añadir mapa
  let mapa = new Map({
    basemap:'gray-vector'
  })
  
  //añadir vista  al mapa
  let vista = new MapView({
    container:'viewDiv',
    map:mapa,
    center:[-3.5,40.4],
    zoom:5
  })

  //crear renderizadores
  let renderizadorHospitales = {
    type:'simple',
    symbol:{
      type:'picture-marker',
      url:'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42251/hospital-emoji-clipart-xl.png',
      width:25,
      height:25,
    }
  }

  //creamos la feature layer
  let hospitalesFL = new FeatureLayer ({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer',
    renderer:renderizadorHospitales
  })

  mapa.add(hospitalesFL)

})
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/rest/support/Query",
    "esri/layers/GraphicsLayer"
],(Map,MapView,FeatureLayer,Query,GraphicsLayer)=>{

    //añadimos mapa
    let mapa = new Map({
      basemap:"topo-vector"
    })

    //añadimos vista de mapa
    let vista = new MapView({
      container:"viewDiv",
      map:mapa,
      center:[-3.5,40.40],
      zoom:5
    })

    //añadimos las capas Feature Layer
    let provinciasFL = new FeatureLayer({
      url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Prov/FeatureServer"
    })

    let ferrocarrilesFL = new FeatureLayer({
      url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RedFerrocarrilesIGN/FeatureServer/6"
    })

    //capa gráfica
    let capaGraficaResultados = new GraphicsLayer()

    //creamos la función on click 
    vista.on('click',(evento)=>{
    
      let parametrosQueryProvincia = new Query({   //primer query de provincias
        geometry:evento.mapPoint,
        spatialRelationship:'intersects',
        returnGeometry:true,
        outFields:[]
    })

    provinciasFL.queryFeatures(parametrosQueryProvincia)
        .then((resultadosProvincias)=>{

        resultadosProvincias.features.map((provincia)=>{      

            let parametrosQueryFerrocarriles = new Query({    //segundo query de ferrocarriles
              geometry:provincia.geometry,
              spatialRelationship:'intersects',
              returnGeometry:true,
              outFields:[]
            })

            ferrocarrilesFL.queryFeatures(parametrosQueryFerrocarriles)
             .then((resultadosFerrocarriles)=>{

                let lineasConSimbologia = resultadosFerrocarriles.features.map((lineas) => {
                 lineas.symbol = {
                    type:'simple-line',     //cambiamos simbología
                    color:'blue'
                }
                return lineas
                })

                capaGraficaResultados.addMany(lineasConSimbologia)
                
                mapa.add(capaGraficaResultados)  //añadimos al mapa
            })
        })
        })
    })
})
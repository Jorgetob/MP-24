require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/tasks/support/Query","esri/symbols/GraphicsLayer"], (Map, MapView, FeatureLayer, Query, GraphicsLayer) => {

    //mapa 
    const mapa = new Map({
        basemap: "topo-vector",
    });

    //vista mapa
    const vista = new MapView({  
        container: "viewDiv",
        map:mapa,
        center:[-3.9875, 39.7664],
        zoom:5,
        });
    
    //feature layer
    const municipiosFL = new FeatureLayer({
        url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/muni/FeatureServer",
    });

    // Añadir el feature layer al mapa
    mapa.add(municipiosFL);

    let capaGrafica = new GraphicsLayer()

    vista.on("click",function(evento){
    
    console.log(evento)

    //configuro mi pregunta

    let parametrosQuery = new Query({
        geometry:evento.mapPoint,
        spatialrelationship:"interects",
        returnGeometry: true,
        outFields:["*"],
    })

    municipiosFL.queryFeatures(parametrosQuery)
    .then((resultados)=>{

        capaGrafica.Grafica.removeAll()

        let features = resultados.features.map ((elemento)=> {
            elemento.symbol = {
                type:"simple-fill",
                color:[255,0,0],
            }

            return elemento
        })

        capaGrafica.addMany(features);
    })
    


    })
    


})

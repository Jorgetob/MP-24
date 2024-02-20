require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/rest/support/Query","esri/layers/GraphicsLayer"], (Map,MapView,FeatureLayer,Query,GraphicsLayer) => {

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
        url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/muni/FeatureServer"
    })

    //ver mapa
    mapa.add(municipiosFL);

    //parámetros de mi pregunta
    let parametrosQuery = new Query({
        where:"CODNUT1 = 'ES3'",   //municipios que quiera en este caso CCAA Madrid
        returnGeometry:true,
        outFields:['*'],         
    })
    //nueva variable de capa grafica 
    let capaGrafica = new GraphicsLayer()

    let variable =  municipiosFL.queryFeatures(parametrosQuery)
        .then((resultados)=>{
    
    //este metodo nos devuelve un feature layer
    let features = resultados.features.map((entidad)=>{
            entidad.symbol = {
                type:"simple-fill",
                color:[255,0,0],  //color rojo
            }
            return entidad
        })

        capaGrafica.addMany(features)

        mapa.add(capaGrafica)

    })
    .catch()

});
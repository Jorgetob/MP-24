//Paso1, importo todos los módulos necesarios en el require

require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

    //instancio un mapa con un mapa base de satélite

    const mapa = new Map({
        basemap: "satellite"
    })

    //instacio una vista (ventana) para ver mi mapa

    const view = new MapView({
        container: "viewDiv",
        map:mapa,
        zoom:3,
        center:[ -3.6360,40.4910]
    })

    //instancio la capa que quiero intruducir en mi mapa

    const capaTerremotos = new FeatureLayer({
        url:"https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Strong_Earthquakes_2012_2014/FeatureServer/0"
    })

    //añado mi capa 
    
    mapa.add(capaTerremotos)
})
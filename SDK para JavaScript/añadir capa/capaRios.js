//Paso1, importo todos los módulos necesarios en el require

require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

    //instancio un mapa con un mapa base de satélite

    const mapa = new Map({
        basemap: "dark-gray"
    })

    //instacio una vista (ventana) para ver mi mapa

    const view = new MapView({
        container: "viewDiv",
        map:mapa,
        zoom:5.5,
        center:[ -3.6360,40.4910]
    })

    //instancio la capa que quiero intruducir en mi mapa

    const capaRios = new FeatureLayer({
        url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RiosPrincipales/FeatureServer"
    })

    //añado mi capa 
    
    mapa.add(capaRios)
})


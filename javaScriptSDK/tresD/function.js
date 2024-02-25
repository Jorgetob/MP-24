require(["esri/Map", "esri/views/SceneView","esri/layers/SceneLayer"], (Map, SceneView,SceneLayer) => { 

    //abrir nuevo mapa
    const map = new Map({
        basemap: "dark-gray",
    });

    //escena web
    const view = new SceneView({
        container: "viewDiv", 
        map: map,
        zoom:12,
        center:[-3.69,40.40],

    //cámaras (son como marcadores)
        camera:{
            heading:90,
            tilt:45,
            position:[-3.69,40.40,500]
        }
    });

    //añadir url  de la capa a una nueva variable
    const veredificios = new SceneLayer({
        url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
    })
    map.add(veredificios);

});
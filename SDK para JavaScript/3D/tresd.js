require(["esri/Map", "esri/views/SceneView","esri/layers/SceneLayer"], (Map, SceneView,SceneLayer) => { 

    const map = new Map({
        basemap: "dark-gray",
    });
    const view = new SceneView({
        container: "viewDiv", 
        map: map,
        zoom:12,
        center:[-3.69,40.40],

        //camaras (son como marcadores)
        camera:{
            heading:90,
            tilt:45,
            position:[-3.69,40.40,500]
        }
    });
    const veredificios = new SceneLayer({
        url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
    })
    map.add(veredificios);

});
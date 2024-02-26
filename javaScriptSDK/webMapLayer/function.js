require(["esri/views/MapView","esri/WebMap"], (MapView,WebMap) =>{

    //llamar al web map y poner el id
        const webmap = new WebMap({
        portalItem: { 
            id: "c7e9ff9174804224b8a44054b32d7db4"
        }
        })
    
        //ver el web map
        const view = new MapView({
            map: webmap,  // The WebMap instance created above
            container: "viewDiv",
            zoom:8,
            map:webmap,
            center:[-16.58, 28.29]
        });
    })
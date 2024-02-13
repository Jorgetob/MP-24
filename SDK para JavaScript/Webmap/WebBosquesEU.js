require(["esri/views/MapView","esri/WebMap"], (MapView,WebMap) =>{


    const webmap = new WebMap({
    portalItem: { 
        id: "e1798d03ed8a44a697cf5f2b930e4eb8"
    }
    })
    const view = new MapView({
        map: webmap,  // The WebMap instance created above
        container: "viewDiv",
        zoom:3,
        map:webmap
    });
})
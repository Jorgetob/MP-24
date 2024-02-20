require(["esri/WebMap","esri/views/MapView","esri/widgets/Editor"], (WebMap, MapView, Editor) => {

    const webmap = new WebMap({    //llamar al mapa web con el id
        portalItem: { 
            id: "459a495fc16d4d4caa35e92e895694c8"
        }
        })
    const vista = new MapView({  
        container: "viewDiv",
        map:webmap,
        center:[-3.5,40.40],
        zoom:5,
        });

    const edita = new Editor({
        view: vista,
        });
        
    vista.ui.add(edita, {
            position: "top-right",
        });
})


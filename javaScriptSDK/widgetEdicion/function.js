require(["esri/WebMap","esri/views/MapView","esri/widgets/Editor"], (WebMap, MapView, Editor) => {

    const webmap = new WebMap({    //llamar al mapa web con el id
        portalItem: { 
            id: "459a495fc16d4d4caa35e92e895694c8"
        }
        })

    //vista del mapa
    const vista = new MapView({  
        container: "viewDiv",
        map:webmap,
        center:[-3.5,40.40],
        zoom:5,
        });
        
    //agregar  widget de editor

    const edita = new Editor({
        view: vista,
        });
    
    //posicion del  widget en la esquina superior derecha
    vista.ui.add(edita, {
            position: "top-right",
        });

})

require(["esri/WebScene","esri/views/SceneView","esri/widgets/LayerList"],(WebScene,SceneView,LayerList)=>{

     //crear escena web con id
    const mapa = new WebScene({
        portalItem:{
        id:"6604dffad1c343c99338700729b48378",
    },
    });

    // crear vista de escena
    const vista = new SceneView({
        container:"viewDiv",
        map:mapa,
    });

    const widgetLayerList = new LayerList({
        view: vista,
    })

    //interfaz de usuario ui
    vista.ui.add(widgetLayerList,{
        position:"bottom-right"
    });
});
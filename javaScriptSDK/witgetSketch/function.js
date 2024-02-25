require(["esri/Map","esri/views/MapView","esri/widgets/Sketch","esri/layers/GraphicsLayer","esri/widgets/Sketch/SketchViewModel"], (Map,MapView,Sketch,GraphicsLayer,SketchViewModel) => {
    
    //añadir mapa
    const mapa = new Map({
        basemap: "dark-gray-vector",
    });

    //añadir vista al mapa
    const vista = new MapView({
        container:"viewDiv",
        map:mapa,
        center:[-3.50,40.40],
        zoom:5,
    });
    
    let capaGrafica = new GraphicsLayer()

    //añadir witget Sketch
    let sketchWitget = new Sketch({
        view: vista,
        layer:capaGrafica,
        //colorear el poligono por dentro
        viewModel: new SketchViewModel({
            view: vista,
            layer: capaGrafica,
            polygonSymbol: {
            type: "simple-fill",
            color:[255,0,0,0.2]
            },
        //cambiar el punto
            pointSymbol:{
                type: "simple-marker",
                style: "circle",
                size: 8,
                color: [255,0,0],
            },
        //cambiar otras opciones de ajuste 
        snappingOptions:{
            enabled:true
        }    
    }),
})

    mapa.add(capaGrafica)

    vista.ui.add(sketchWitget, {position: "top-right"});
});
require(["esri/Map","esri/views/MapView","esri/symbols/SimpleMarkerSymbol","esri/Graphic","esri/layers/GraphicsLayer","esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol"],(Map,MapView,SimpleMarkerSymbol,Graphic,GraphicsLayer,SimpleLineSymbol,SimpleFillSymbol)=>{

    const mapa = new Map({
        basemap:"dark-gray-vector"
    })     

    const vista = new MapView({
        container:"viewDiv",
        map:mapa,
        center:[-3.5,40.4],
        zoom:5
    })

    //geometría del punto
    const punto1 ={
        type:"point",
        longitude:-3.5,
        latitude:40.4,
    }

    //simbología de mi punto
    const simbologia1 = new SimpleMarkerSymbol({
        angle: 336,
        color: [33,66,84,1],
        outline: {
        cap: "round",
        color: [194,0,168,1],
        join: "round",
        miterLimit: 1,
        style: "dash",
        width: 1
        },
        path: "undefined",
        size: 10,
        style: "diamond",
        xoffset: 0,
        yoffset: 0
    });

    //combino la geometría con la simbología

    const puntoGraphic = new Graphic({
        geometry:punto1,
        symbol:simbologia1,
    })

    //cargo la capa gráfica

    const capaGrafica = new GraphicsLayer()


    //añadir la capa a la vista
    
    mapa.add(capaGrafica)



    //construit una linea

    const linea1 = {
        type: "polyline", // autocasts as new Polyline()
        paths: [[-3.6741,40.4257], [-3.6557,40.4108]]
    };

    //simbología línea

    const simbologia2 = new SimpleLineSymbol({
        cap: "round",
        color: [26,160,24,1],
        join: "round",
        miterLimit: 3,
        style: "solid",
        width: 3
    });
    
    //crear gráfico de la línea
    const lineaGraphic = new Graphic({
        geometry:linea1,
        symbol:simbologia2,
    })

    //cargo la capa gráfica
    capaGrafica.addMany([puntoGraphic,lineaGraphic])
})

//creo el poligono

const poligono={
    type:"polygon",
    paths:[
        [-3.50,40,41]
        [-3.51,40,40]
        [-3.50,41,40]
    ]
}

//nueva simbologia a través de la api
const simbologiaPoligono = new SimpleFillSymbol({
    
})



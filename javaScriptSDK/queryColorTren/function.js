require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/rest/support/Query","esri/layers/GraphicsLayer","esri/core/reactiveUtils"], (Map, MapView,FeatureLayer,Query,GraphicsLayer,reactiveUtils) => {

    //mapa 
const mapa = new Map({
    basemap: "topo-vector",
});

//vista mapa
const vista = new MapView({  
    container: "viewDiv",
    map:mapa,
    center:[-3, 40],
    zoom:5,
    });
//feature layer 
//capa de municipios
let capaProvincias = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Prov/FeatureServer"
    })


//capa ferrocarriles españa
let capaFerrocarriles = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RedFerrocarrilesIGN/FeatureServer/6"
    })

let capaGraficaResultados  =  new GraphicsLayer();

    vista.on("click",(evento)=>{
        parametrosQueryProvincia = new Query({
            geometry:evento.mapPoint,
            spatialRelationship:"intersects",
            returnGeometry:true,
            outFields:[]
        })


    })

let capaGrafica = new GraphicsLayer()

reactiveUtils.on(()=>vista,'click',function(evento){
    
    let parametrosQuery = new Query({
        geometry:evento.mapPoint,
        spatialReference: 'intersects',
        returnGeometry: true,
        outFields:['*']
    })

    capaProvincias.queryFeatures(parametrosQueryProvincia)
    .then((resultadosProvincias)=>{

        resultadosProvincias.features.map((provincia)=>{
            
            let parametrosQuery = new Query({
                geometry:evento.mapPoint,
                spatialReference: 'intersects',
                returnGeometry: true,
                outFields:[]
    })
    //query ferrocarriles
    capaFerrocarriles.queryFeatures(parametrosQueryFerrocarriles)
    .then((resultadosFerrocarriles)=> {

        let lineasConSimbologia = resultadosFerrocarriles.features.map((lineas)=> {
            lineas.symbol={
                type:"simple-line",
                color:"blue"
            }
        return lineas
    })
    })
        capaGraficaResultados.addMany(lineasConSimbologia)

    })

    mapa.add(capaGraficaResultados)


    })
})
})
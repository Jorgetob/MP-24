require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/rest/support/Query","esri/layers/GraphicsLayer"], (Map, MapView,FeatureLayer,Query,GraphicsLayer) => {

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
mapa.add(capaProvincias);

//capa ferrocarriles españa
let capaFerrocarriles = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/RedFerrocarrilesIGN/FeatureServer/6"
    })
// mapa.add(capaFerrocarriles);

//nueva variable de capa grafica 
let capaGrafica = new GraphicsLayer();

//query provincias
let parametrosQuery = new Query({
    where:"CODNUT1 = 'ES2'",   //aragon
    returnGeometry:true,  
    outFields:['*'],     
});

 capaProvincias.queryFeatures(parametrosQuery)  //promesa
    .then((resultados) => {
        
// //agregar la geometria a una nueva cap
//         let features = resultados.features.map((entidad) => {
//             entidad.symbol = {
//             type: "simple-fill",
//             color:[255,0,0],  //color rojo
//             };
//             return entidad;
//         });
//         capaGrafica.addMany(features);

        resultados.features.map((poligono) => {
            const queryFerrocarriles = new Query({
                geometry: poligono.geometry,
                spatialRelationship: "contains",
                returnGeometry: true,
            });

//query ferrocarril
            capaFerrocarriles.queryFeatures(queryFerrocarriles)
                .then(function (results) {

                    let color = results.features.map((entidad) => {
                        entidad.symbol = {
                            type: "simple-line", 
                            color:"red"
                        };
                        return entidad
                    });
                        capaGrafica.addMany(color);
                })
            });
    })
        mapa.add(capaGrafica);
    })
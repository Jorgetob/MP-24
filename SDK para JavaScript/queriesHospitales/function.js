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
let capaHospitales = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer"
    })
mapa.add(capaHospitales);

//nueva variable de capa grafica 
let capaGrafica = new GraphicsLayer();

let parametrosQuery = new Query({
    where:"PROVINCIAS = 'Huelva'",   //provincia de huelva
    returnGeometry:true,
    outFields:['*'],         
});

capaHospitales.queryFeatures(parametrosQuery)
    .then((resultados) => {
        
// Establecer el símbolo para los hospitales
        let features = resultados.features.map((entidad) => {
            entidad.symbol = {
            type: "simple-marker",
            color: "green", // Color  para los hospitales
            size: 8,
            };
            return entidad;
        });
    
        capaGrafica.addMany(features);

        mapa.add(capaGrafica);
        
        })

})

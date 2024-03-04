//Prueba final Módulo V SDK. Jorge Toboso Torets

require([
"esri/Map",
"esri/views/MapView",
"esri/layers/FeatureLayer","esri/rest/support/Query","esri/layers/GraphicsLayer","esri/widgets/LayerList","esri/widgets/Sketch","esri/widgets/Sketch/SketchViewModel"], (Map, MapView, FeatureLayer,Query,GraphicsLayer,LayerList,Sketch,SketchViewModel) => {

//1.Configuro el mapa y la vista

//creamos el mapa
const mapa = new Map({
    basemap: "gray",      //tipo de mapa base
});

//añadimos la vista al mapa
const vista = new MapView({
    container: "viewDiv",   //creado en el body del html
    map: mapa,
    center: [-3.5, 40.4],  //España
    zoom: 4,
    });

//2.instancio la capa en mi mapa con un Feature Layer. Red Natura.

const capaRedNatura = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Red_Natura_2000/FeatureServer",
    opacity:"0.8",// opacity:0.8,  //aplicar opacidad del 80%

//con el uso del renderizador (dentro de la constante capaRedNatura) selecciono  que tipo de dato quiero mostrar.Primero LIC y cambio de color al asignado en el documento,
//y luego ZEPA también asignado el color en el documento.
    renderer:{
        type:'unique-value',
        field:'Tipo',
        
        uniqueValueInfos:[{
            value:'LIC',
            symbol:{
                type:'simple-fill',
                color:'#cbf3f0'  //color
            }
        },{
            value:'ZEPA',
            symbol:{
                type:'simple-fill',
                color: '#ffbf69' //color 
            }
        }]
    }
})
mapa.add(capaRedNatura)

//3.Pop Up capa Playas

//Creo el pop-up en una variable (plantilla)
let plantilla = {
    title:'{Nombre}',
    content:[
    {
        type:'fields',
        fieldInfos:[
        {
            fieldName:'Descripci',
            label:'Descripcion'
        },
        {
            fieldName:'Longitud',
            label:'Longitud'
        },
        {
            fieldName:'Anchura',
            label:'Anchura'
        },
        {
            fieldName:'Condicione',
            label:'Condiciones'
        }
        ]
    }
    ]
}
//creo un nuevo Feature Layer con la capa de Playas Españolas y añado el popup creado.

const capaPlayas = new FeatureLayer({
    url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Playas_2015/FeatureServer",
    popupTemplate:plantilla,
    effect:"bloom(2, 0.5px,0.0)"
})
mapa.add(capaPlayas)

//4. Consulta Playas españolas, Sí submarinismo

//nueva variable de capa grafica 
let capaGrafica = new GraphicsLayer({title:"Playas Submarinismo"});

let queryPlaya = new Query({
    where:"Submarinis = 'Sí'",   //si se puede hacer submarinismo
    returnGeometry:true,
    outFields:['*'],         
});

capaPlayas.queryFeatures(queryPlaya)  //promesa
    .then((resultados) => {

// Establecer el símbolo para las playas con submarinismo
        let features = resultados.features.map((entidad) => {
            entidad.symbol = {
                type:'picture-marker',
                url:'https://cdn-icons-png.flaticon.com/128/437/437094.png',   //url de un emoticono submarinista
                width:25,
                height:25,
            };
            return entidad;
        });
    
        capaGrafica.addMany(features);
})

//5. Agregar Witgets

 // agregar widget Layerlist al contenedor de la vista
const widgetLayerList = new LayerList({
    view: vista,
})

//interfaz de usuario ui
vista.ui.add(widgetLayerList,{
    position:"bottom-left"   //abajo a la izquierda
});

//agregar widget Sketch al contenedor de la vista
let sketchWidget = new Sketch({
    view: vista,
    layer:capaGrafica,
    viewModel: new SketchViewModel({
        view: vista,
        layer: capaGrafica,
        polygonSymbol: {
        type: "simple-fill",
        color:[255,0,0,0.2]
        },
    })
})
mapa.add(capaGrafica)

vista.ui.add(sketchWidget,{
    position: "top-right" //arriba a la derecha
});

//6. Crea funcionalidad en tu aplicación web

//A través del widget Sketch, cuando el usuario termine de dibujar un polígono, 
// cambia la simbología de las entidades de la capa de la Red Natura 2000 que hagan 
// intersección con el polígono que el usuario acaba de crear. 

vista.on("click", (evento) => {
    let poligonosRedNatura = new Query({
        geometry: evento.mapPolygon,
        spatialRelationship: 'intersects',
        returnGeometry: true,
        outFields: ["*"]
    });

    capaRedNatura.queryFeatures(poligonosRedNatura)
        .then((resultadosRedNatura) => {
            resultadosRedNatura.features.map((rednatura) => {
                // Cambia la simbología de las entidades de Red Natura 2000 que intersecan 
                rednatura.symbol = {
                    type: 'simple-polygon',
                    color: 'red' // color rojo si interseca
                };
                return rednatura;
            });

            // cambia en la capa en la vista
            capaRedNatura.applyEdits({
                updateFeatures: resultadosRedNatura.features
            });
        })
    });
});
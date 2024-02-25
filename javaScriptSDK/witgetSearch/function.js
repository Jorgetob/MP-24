require(["esri/Map","esri/views/MapView","esri/widgets/Search","esri/layers/FeatureLayer"], (Map, MapView, Search, FeatureLayer) => {

  
    let mapa = new Map({         //añade el mapa
        basemap:"topo-vector",
    })
   
    const vista = new MapView({  //ver mapa
        container:"viewDiv",
        map:mapa,
        center:[-3.5,40],
        zoom:5,
    });

    //añadimos la capa de hospitales

    let capaHospitales = new FeatureLayer({
        url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer"
    })

    let busqueda = new Search({  //añadir opción de búsqueda
    view:vista,
    maxSuggestions:3,           //indicar 3 sugerencias de búsqueda
    
    sources:[{                  //añadir una capa para utilizar 
        layer:capaHospitales,
        searchFields: ["NOMBRE","PROVINCIAS"],
        suggestionTemplate: "{NOMBRE} - {PROVINCIAS}",
        exactMatch:false,
        outFields:["*"],
        placeholder:"Ejemplo: Hospital de Leza",
        name: "Hospitales",
        resultSymbol:{
            type:"simple-marker",
            color:[119,158,203,0.9],
            style:"circle",
            outline:{
                color:"white",
                width:1,
            }
        }
    }]
})
    vista.ui.add(busqueda,{
        position:"top-right",
        index:2
    })
})

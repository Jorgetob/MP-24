require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer"],(Map,MapView,FeatureLayer)=>{

    //instancio un mapa con un mapa base de satélite

    const mapa = new Map({
        basemap: "dark-gray"
    })

    //instacio una vista (ventana) para ver mi mapa

    const view = new MapView({
        container: "viewDiv",
        map:mapa,
        zoom:5.5,
        center:[ -3.6360,40.4910]
    })

    //feature layer 
let capaTiempo = new FeatureLayer({
    url:"https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/weather_stations_010417/FeatureServer/0",
    renderer:{                       //hay que crear el renderer
        type:"simple",
        symbol:{
            type:"simple-marker",
            path:"M14.5,29 23.5,0 14.5,9 5.5,0z",
            color:"#ffff00",
            outline:{
                width:0.5,
            },
            angle:180
        },
        visualVariables:[{
            type:"rotation",
            field:"WIND_DIRECT"
        },{
            type:"size",
            field:"WIND_SPEED",
            valueUnit:"kilometers",
            valueRepresentation:"diameter",
            minDataValue:0,
            maxDataValue:60,
            minSize:8,
            maxSize:40
        }
        ],
    },
    effect:"bloom(2, 1px, 20%)"
})

mapa.add(capaTiempo);

})
require(["esri/Map","esri/views/MapView","esri/widgets/BasemapToggle"],(Map,MapView,BasemapToggle)=>{

    //crear mapa 
    const mapa = new Map({
        basemap: "dark-gray-vector",
    });

    // crear vista de mapa
    const vista = new MapView({
        container:"viewDiv",
        map:mapa,
        center:[-3.50,40.40],
        zoom:5,
    });

    //crear el witget hay que asignarle un nombre y el igual al widget que quieras
    const widgetBasemapToggle = new BasemapToggle({
        view: vista,
        nextBasemap: "hybrid",
    })

    //interfaz de usuario ui
    vista.ui.add(widgetBasemapToggle,{
        position:"top-right"
    });
})
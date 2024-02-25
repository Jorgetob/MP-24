require(["esri/Map","esri/views/MapView","esri/widgets/BasemapGallery"],(Map,MapView,BasemapGallery)=>{

    //mapa
    const mapa = new Map({
        basemap: "dark-gray-vector"
    });
    
    //vista de mapa
    const vista = new MapView({
        container:"viewDiv",
        map:mapa,
        center:[-3.50,40.40],
        zoom:5,
    });

    //agregar widget mapa base al vista del mapa
    const widgetBasemapGallery = new BasemapGallery({
        view: vista
    })

    vista.ui.add(widgetBasemapGallery,{
        position: "top-right"
    })

})
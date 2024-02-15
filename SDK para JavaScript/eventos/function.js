require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","esri/core/reactiveUtils"],(Map,MapView,FeatureLayer,reactiveUtils)=>{

    const mapa = new Map({
        basemap:"dark-gray"
    })

    const vista = new MapView({
        container:"viewDiv",
        map:mapa,
        center:[-3.50,40.40],
        zoom:5,
    });

    reactiveUtils.on(() => vista,"click", anadirCapaMapa)

    function anadirCapaMapa(){
        const capa = new FeatureLayer({
            url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ENP_actualizados/FeatureServer"
        })
        mapa.add(capa);
    }

    reactiveUtils.on(() => vista,"click", anadirCapaMapa1)
    function anadirCapaMapa1(){
        const capa = new FeatureLayer({
            url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer"
        })
        mapa.add(capa);
    }
    reactiveUtils.on(() => vista,"click", anadirCapaMapa1)
    function anadirCapaMapa1(){
        const capa = new FeatureLayer({
            url:"https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer"
        })
        mapa.add(capa);
    }

})
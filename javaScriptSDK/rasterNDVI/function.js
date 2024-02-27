require(["esri/Map",
"esri/views/MapView",
"esri/layers/ImageryTileLayer","esri/layers/support/RasterFunction","esri/layers/support/rasterFunctionConstants"],(Map,MapView,ImageryTileLayer,RasterFunction,rasterFunctionConstants)=>{
    
    let mapa = new Map ({
        basemap:'gray-vector'
    })
    
    let vista = new MapView({
        container:'viewDiv',
        map:mapa,
        center:[-16.58, 28.29],
        zoom:7
    })

//raster
let functionRaster = new RasterFunction({
    functionName:"NDVI",
    functionArguments: {
        visibleBandID:3,
        infraredBandID:7,
    }
})

//pintar el raster
let colormap = new RasterFunction({
    functionName:"Colormap",
    functionArguments:{
        colormapName: rasterFunctionConstants.colormapName.NDVI2,
        raster: functionRaster
    }
})

//feature layer 
let raster = new ImageryTileLayer({
    url:"https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
    rasterFunction:colormap,
    effect:"saturate(150%)"
})

mapa.add(raster)

})
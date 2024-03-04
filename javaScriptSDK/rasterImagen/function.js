require(["esri/Map",
"esri/views/MapView",
"esri/layers/ImageryTileLayer"],(Map,MapView,ImageryTileLayer)=>{
    
    //añadimos el mapa
    let mapa = new Map ({
        basemap:'gray-vector'
    })
    
    //vista de mapa
    let vista = new MapView({
        container:'viewDiv',
        map:mapa,
        center:[-16.58, 28.29],
        zoom:7
    })
//feature layer 
let raster = new ImageryTileLayer({
    url:"https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/ArcGIS/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer",
    effect:"brightness(400%) saturate(150%)"
})
mapa.add(raster)

//botones
document.getElementById("cam1").addEventListener("click", buttonHandlerCam1);

function buttonHandlerCam1() {
    raster.bandIds = [3,2,1]
}

document.getElementById("cam2").addEventListener("click", buttonHandlerCam2);

function buttonHandlerCam2(){
    raster.bandIds = [11,10,1]
}

})
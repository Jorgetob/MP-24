require(["esri/WebScene","esri/views/SceneView","esri/views/3d/environment/SnowyWeather", "esri/Camera"], (WebScene, SceneView,Camera,SnowyWeather) => {
    const scene = new WebScene({
        portalItem: {
        id: "6db1a1902df944f2b434dd538fa70b24"
        }
    });
    const view = new SceneView({
        map: scene,
        container: "viewDiv",
        padding: {
        top: 40
        },
    })

    document.getElementById("nieve").addEventListener("click", buttonHandler)
    function buttonHandler() {
        if(view.environment.weather.type === "sunny"){
            view.environment.weather ={
                type:"snowy"
        }}else{
            view.environment.weather= {
                type:"sunny"
            }   
        }
    }

})
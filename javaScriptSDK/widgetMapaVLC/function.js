require(["esri/WebMap","esri/views/MapView","esri/widgets/Measurement","esri/widgets/ScaleBar"],(WebMap,MapView,Measurement,ScaleBar)=>{

    const vlcwebmap = new WebMap({
        portalItem: { 
        id: "0d9e40f4e136420ea3a3cee5d5539c53"
        }
    });
    const view = new MapView({
        map: vlcwebmap,  // The WebMap instance created above
        container: "viewDiv"
    });

    const measurement = new Measurement({
        view: view,
        activeTool: "distance"
    });
    view.ui.add(measurement, "top-right");
    function switchTool() {
        const tool = measurement.activeTool === "distance" ? "area" : "distance";
        measurement.activeTool = tool;
    }

    let scaleBar = new ScaleBar({
        view: view
    });
    view.ui.add(scaleBar, {
        position: "bottom-left"
    });
})
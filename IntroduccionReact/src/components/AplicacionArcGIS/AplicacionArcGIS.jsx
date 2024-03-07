//plantilla 

import './AplicacionArcGIS.css'
import EjemploCard from './EjemploCard/EjemploCard'
import { useState } from 'react'

function AplicacionArcGIS({linkImagen,  titulo,  descripcion, linkProducto}){

    let ejemplo
    
    let [boton,setBoton] = useState(false)

    function buttonHandler(){
        if(boton === false){
            setBoton (true)
        }else{
            setBoton (false)
        }
    }

    if(titulo === "Experience Builder" && boton === true){
        ejemplo = <>
            <EjemploCard
                imagen={"https://www.arcgis.com/sharing/rest/content/items/52437cd5d9b1451787d490c0ff721c85/resources/images/widget_148/1701903599995.png"}
                titulo={"Vigo navidad"}
                texto={"Visor de Experience Builder de Navidad Vigo"}
                enlace={"https://experience.arcgis.com/experience/52437cd5d9b1451787d490c0ff721c85"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://img.rtve.es/imagenes/galicia-alerta-roja-por-olas-nueve-metros-ante-llegada-temporal-afectara-a-gran-parte-del-pais/01708686917733.jpg"}
                titulo={"Visor Costa Galega"}
                texto={"Aumento del nivel del mar. Cuanto más importante es el aumento del nivel del mar, más difícil resulta la protección costera, debido  principalmente a los obstáculos económicos, financieros y sociales (IPCC, 2019)."}
                enlace={"https://mapas.xunta.gal/visores/costa/"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://multimedia.andalucia.org/content_images/main_image_61309.jpeg"}
                titulo={"Acrisure Stadium Explorer"}
                texto={"An interactive map of the seating and ticketed sections of Acrisure Stadium"}
                enlace={"https://experience.arcgis.com/experience/dde155a7b903429a90c7fe39e281f9be/page/Home/"}
                ></EjemploCard>
        </>
    }
    if(titulo === "ArcGIS Dashboards" && boton === true){
        ejemplo = <>
            <EjemploCard
                imagen={"https://www.emeraldgrouppublishing.com/sites/default/files/image/covid-cells.jpg"}
                titulo={"Covid-19"}
                texto={"COVID-19 Dashboard by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University (JHU)"}
                enlace={"https://www.arcgis.com/apps/dashboards/bda7594740fd40299423467b48e9ecf6"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://i.imgur.com/o3rIzBe.png"}
                titulo={"Boletín hidrológico peninsular"}
                texto={"Dirección General del Agua - Ministerio para la Transición Ecológica y el Reto Demográfico.Demarcaciones hidrográficas"}
                enlace={"https://www.arcgis.com/apps/dashboards/912dfee767264e3884f7aea8eb1e0673"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://th.bing.com/th/id/OIP.IKCVTiDNlvIm3oz9dNRx1wHaHa?w=196&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
                titulo={"Active Fires and Hotspots"}
                texto={"Active Fires and Hotspots,Density of Hotspots Detected(48 hours)"}
                enlace={"https://www.arcgis.com/apps/dashboards/2130a960628445938fd70ae1b108c29a"}
                ></EjemploCard>
        </>
    }
    if(titulo === "ArcGIS StoryMaps" && boton === true){
        ejemplo = <>
            <EjemploCard
                imagen={"https://s2.abcstatics.com/media/espana/2022/06/26/incendio-culebra-bomberos-ksqH--1248x698@abc.jpg"}
                titulo={"Incendio Forestal Sierra de la Culebra"}
                texto={"Visión geoespacial para el análisis de los impactos y definición de medidas de recuperación"}
                enlace={"https://storymaps.arcgis.com/stories/c6158b4f6f084ec58fb51010ab0f2813"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1ircCk.img?w=450&h=400&m=4&q=79"}
                titulo={"T-Minus 6000 Global Rocket Launches to Orbit, 1957-2020"}
                texto={"First Orbit On October 4, 1957, the Soviet Union put humanity's first artificial satellite, Sputnik, into orbit around the earth. The aluminum sphere emitted radio signals heard by amateur radio operators around the world. By monitoring the duration of those signals, scientists could learn more about the composition of our atmosphere."}
                enlace={"https://storymaps.arcgis.com/collections/8797652dbe244610a6b1b2e0e2f07434?item=5"}
                ></EjemploCard>
            <EjemploCard
                imagen={"https://prosertek.com/wp-content/uploads/atraque-barco.jpg"}
                titulo={"Breaking point"}
                texto={"Uncovering the dangerous realities of the shipbreaking industry"}
                enlace={"https://storymaps.arcgis.com/collections/68ba1955f063424884fc7c77dea8480e?item=6"}
                > </EjemploCard>
        </>
    }

return (
    <div className="Aplicacion">
        <img src ={linkImagen} alt= ""/>
        <div>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href={linkProducto}>Enlace al producto</a>
            <button onClick={buttonHandler}>Ejemplos de uso</button>
        </div>
        <div className="Lista-Ejemplos">
            {ejemplo}
        </div>
    </div>
)
}


export default AplicacionArcGIS
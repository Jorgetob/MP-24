import "./EjemploCard.css"

function EjemploCard({imagen, titulo, texto, enlace}){

return (
    <div className="EjemploCard">
        <img src ={imagen} alt= ""/>
        <h4>{titulo}</h4>
        <p>{texto}</p>
        <a href={enlace}>Enlace Ejemplo</a>
    </div>
    )
}

export default EjemploCard
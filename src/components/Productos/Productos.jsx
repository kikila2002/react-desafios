import React from 'react'
import Card from "./Card"

function Productos() {
  return (
    <div className='container'>
        <h1>Productos</h1>
        <div >
            <Card
                price={750}
                title="Chapita Soy"
                detail="Durabilidad y Calidad asegurada!!"
                img = "./imagenes/soy.jpg"
            />
            <Card
                price={750}
                title="Chapita Oreo"
                detail="Durabilidad y Calidad asegurada!!"
                img = "./imagenes/oreo0.png"
            />
            <Card
                price={750}
                title="Chapita Vikings"
                detail="Durabilidad y Calidad asegurada!!"
                img = "./imagenes/VIKINGOS1.png"
            />
            <Card
                price={750}
                title="Chapita Arcoiris"
                detail="Durabilidad y Calidad asegurada!!"
                img = "./imagenes/arcoiris.jpg"
            />


        </div>
    </div>

  )
}

export default Productos;

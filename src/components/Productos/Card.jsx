import React from 'react'
import "./card.css"

function Card(p) {
    const [cont, setCont] =  React.useState (1)
    function agregar() {
      if(cont < p.stock){
        setCont(cont + 1)
      }
    }
    function restar() {
      if(cont > 1){
        setCont(cont - 1)
      }
    }
  return (
    <div className='card-todo card '>
        <div className='' >
            <img className='imgg' src={p.img} alt="cardimg" />
        </div>
        <div>
            <h2>
                {p.title}
            </h2>
            <p>
                {p.detail}
            </p>
            <h4>
                {p.price}
            </h4>
            <div>
                <button onClick={agregar} >+</button>
                <span>{cont}</span>
                <button onClick={restar} >-</button>
            </div>
        </div>

    </div>
  )
}

export default Card
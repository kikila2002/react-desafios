import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <div className='card todo '>
        <div className='' >
            <img className='imgg' src={props.img} alt="cardimg" />
        </div>
        <div>
            <h2>
                {props.title}
            </h2>
            <p>
                {props.detail}
            </p>
            <h4>
                {props.price}
            </h4>
        </div>

    </div>
  )
}

export default Card
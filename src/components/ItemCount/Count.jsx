import React from 'react'

function Count(p) {
  const [cont, setCont] =  React.useState (p.initial)

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
    <div>
        <button onClick={agregar} >+</button>
        <span>{cont}</span>
        <button onClick={restar} >-</button>
    </div>
  )
}

export default Count
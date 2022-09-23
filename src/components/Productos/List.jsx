import React from 'react'
import Card from "./Card"

import getItems  from '../../services/mockAPI';
import { useState } from 'react';
import { useEffect } from 'react';

function List() {
    let [data, setData] = useState([]);

    useEffect ( () => {
        getItems().then( (respuesta) => {
            setData(respuesta)
        })
    }, []);

  return (
    <div className='container '>
        {data.map((p) => {

            return(
                <Card
                    key={p.id}
                    price={p.price}
                    title={p.title}
                    img={p.img}
                    detail={p.detail}
                />
            )
        })}
    </div>
  )
}

export default List;

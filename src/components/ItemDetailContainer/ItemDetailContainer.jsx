import React, {useState, useEffect} from 'react'
import {getSingleItems}  from "../../services/mockAPI";


function List() {
    let [data, setData] = useState({});

    useEffect ( () => {
        getSingleItems().then( (respuesta) => {
            setData(respuesta)
        })
    }, []);

  return (
    <div>
        <div className='container '>
            
            <img>{data.img} </img>
            <h1> {data.title} </h1>  
            <h3> {data.price} </h3>
            <p> {data.detail} </p>
            
        
        </div> 
    </div>
  );
}

export default ItemDetailContainer;
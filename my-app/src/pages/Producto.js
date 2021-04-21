import React, {Component, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Producto(props){

    const [compra,setCompra] = useState({
        mensaje:'',
        comprado:false
    })

    const comprarProducto = ()=>{
        setCompra({
            mensaje: "Producto comprado",
            comprado: true
        })
    }

    return(
        <div>
            {compra.comprado ?
            <h2>{compra.mensaje}</h2> :
            <div>
                <h1>{props.data.name}</h1>
                <p><b>Precio: </b>{props.data.price}</p>
                <button><Link to={'/producto/detalle/'+props.id}>Detalle</Link></button><br/>
                <button><Link to={'/producto/editar/'+props.id}>Editar Producto</Link></button><br/>
                <button onClick={comprarProducto}>Comprar</button>
            </div>
            }
        </div>
    )

}

export default Producto;
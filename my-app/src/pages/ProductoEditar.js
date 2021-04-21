import React, {useState, useEffect} from 'react';
import firebase from '../config/firebase';
import {Link} from 'react-router-dom';

function ProductoEditar(props){

    const [datos,setDatos] = useState({name:'',price:''});

    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos(doc.data())
            })
    }, []); 

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name

        setDatos({
            ...datos,
            [name]:value
        })
    }

    const handleSubmit =  (e)=>{
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .set({
            name:datos.name,
            price:datos.price
        },{merge:true})
        .then(doc=>{
            alert("Producto actualizado")
        })
        e.preventDefault();
    }

    const handleDelete = (e)=>{
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            alert("Producto eliminado");
        })
        e.preventDefault();
    }

    return(
        <div>
            <h3>Editar el producto:</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" name="name" value={datos.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Precio: </label>
                    <input type="number" name="price" value={datos.price} onChange={handleChange}></input>
                </div>
                <input type="submit" value="Guardar"></input>
                <button onClick={handleDelete}><Link to={'/'}>Eliminar</Link></button>
            </form>
        </div>
    )
}

export default ProductoEditar
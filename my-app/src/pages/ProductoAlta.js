import React,{useEffect,useState} from 'react';
import firebase from '../config/firebase';

function ProductoAlta() {

    const [datos,setDatos] = useState({name:'',price:''});

    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name =target.name;

        setDatos({
            ...datos,
            [name]:value //[name] es para que sea generico, en el dato ese de datos le pongo el value del input
        })
    }

    const handleSubmit = (e) => {
        firebase.db.collection('productos').add(datos)
        .then(doc=>{
            console.log(doc);
            alert("El producto se ha dado de alta");
        })
       e.preventDefault();
    }

    return(
        <div>
            <h2>Dar de un alta un producto:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" placeholder="Ingrese el nombre" name="name" value={datos.name} onChange={handleChange}></input>
                </div>
                <div>
                    <label>Precio: </label>
                    <input type="text" placeholder="Ingrese el precio" name="price" value={datos.price} onChange={handleChange}></input>
                </div>
                <input type="submit" value="Guardar"></input>
            </form>
        </div>
    );
}

export default ProductoAlta;
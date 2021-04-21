import React, {useState, useEffect} from 'react';
import firebase from '../config/firebase';
import Producto from './Producto';

const ProductoDetalle = (props)=> {
    const [producto,setProducto] = useState({
        name:'',
        price:''
    });

    useEffect(
    () => {
        firebase.db.doc('productos/'+props.match.params.id)
        .get()
        .then(doc=>{
            setProducto(doc.data())
        })
    }, []); 
   
    return (
        <>   
        {
            producto && 
            <div>
                <Producto data={producto}/>
            </div>
        }
         </>
    )
    
}


export default ProductoDetalle;
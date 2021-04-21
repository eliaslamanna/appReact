import React, {Component} from 'react';
import Producto from './Producto';
import firebase from '../config/firebase';
import {Link, Router} from 'react-router-dom';

class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            productos:[]
        }
    }
    componentDidMount(){
       firebase.db.collection('productos')
      .get()
      .then(querySnapshot=>{
        console.log("query",querySnapshot.docs)
        this.setState({
            productos:querySnapshot.docs
        })
       })
    }

    render(){
        return (
            <>
                <div>
                    {this.state.productos.map(producto=><Producto key={producto.id} id={producto.id} data={producto.data()} detalleButtons={true}/>)}
                </div>         
          </>
        )
    }
}

export default Home;
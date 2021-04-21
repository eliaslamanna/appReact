import React, {Component,useState,useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import ProductoDetalle from './pages/ProductoDetalle';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Menu from './pages/Menu';
import ProductoAlta from './pages/ProductoAlta';
import ProductoEditar from './pages/ProductoEditar';
import {Link, Route, Router} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import firebase from './config/firebase';

function App(){
  
  const[estado,setEstado] = useState({
    opcionesMenu:[{name:'Home',path:"/"},{name:'Login',path:"/login"},{name:'Registro',path:"/registro"},{name:'Producto Alta',path:"/producto/alta"}],
  })
 
  const handleClick = ()=>{
      setEstado({...estado,opcionesMenu:[{name:'Home',path:"/"},{name:'Logout',path:"/login"}]})
  }

    return (
      <BrowserRouter>
        <Menu opciones={estado.opcionesMenu} click={handleClick}></Menu>
        <Route exact path='/' component={()=><Home />}/>
        <Route exact path='/login' component={()=><Login click={handleClick}/>}/>
        <Route exact path='/registro' component={Registro} />
        <Route exact path='/producto/detalle/:id' component={ProductoDetalle} />
        <Route exact path="/producto/alta" component={ProductoAlta} />
        <Route path="/producto/editar/:id" exact  component={ProductoEditar} />
      </BrowserRouter>
    );

}

export default App;

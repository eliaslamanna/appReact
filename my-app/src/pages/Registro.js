import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import firebase from '../config/firebase';

const Registro = (props) => {
    const history = useHistory();
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    
    const handleSubmit = (e)=>{
        let email=form.email;
        let password=form.password;    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
            })
            .then((data)=>{
                history.push("/login");
                alert("Se ha completado el registro");
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((error)=>{
            console.log("Error",error)
        })
        e.preventDefault();
    }

    const handleChange = (e)=>{
      const target = e.target;
      const value = target.value
      const name = target.name;
  
      setForm({
        ...form,
        [name] : value});
    }
    
    return(
        <div>
            <br/>
            <h2>Registro:</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" placeholder="Ingrese su nombre" name="nombre" value={form.usuario} onChange={handleChange}/><br/>
                <label>Apellido: </label>
                <input type="text" placeholder="Ingrese su apellido" name="apellido" value={form.usuario} onChange={handleChange}/><br/>
                <label>email: </label>
                <input type="email" placeholder="Ingrese su email" name="email" value={form.usuario} onChange={handleChange}/><br/>
                <label>Password: </label>
                <input type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/><br/>
                <input type="submit" value="Registrarse"/>
            </form>   
        </div>
    )
    
}

export default Registro;
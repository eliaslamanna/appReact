import React, {useState} from 'react';
import firebase from '../config/firebase';

const Login = (props) => {
   
  const [usuario, setUsuario] = useState({
    email: '',
    password: ''
  });

  let handleLogin = (event, valor) => {
    
    firebase.auth.signInWithEmailAndPassword(usuario.email, usuario.password)
    .then((data)=>{
      console.log("data",data)
      alert("Se ha logeado correctamente")
    })
    .catch(error=>{
      console.log("error",error)
      alert("El usuario es incorrecto")
    })
    
    event.stopPropagation();
    event.preventDefault();
  }

  let handleForm = (event) => {
      setUsuario({...usuario, [event.target.name]: event.target.value});
    // switch (field) {
    //   case 'usuario':
    //     setUsuario({...usuario, usuario: event.target.value});
    //     break;
    //   case 'password':
    //     setUsuario({...usuario, password: event.target.value});
    //     break;
    event.preventDefault();
    //   default:
    //     break;
  }

  return (
    <div>
        <h3>Login:</h3>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="email" name="email" value={usuario.email} onChange={(event)=>handleForm(event)} />
        <br/>
        <input type="text" placeholder="password" name="password" value={usuario.password} onChange={(event)=>handleForm(event)} />
        <br/>
        <input variant="primary" value="Login" type="submit"/>
      </form>
    </div>
  );
}

export default Login;
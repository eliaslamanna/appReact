import React, {Component} from 'react';
import Producto from './Producto';
import {Link, Router} from 'react-router-dom';

class Menu extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Paginas pricipales:</h1>
                {this.props.opciones.map(opcion=><Link to={opcion.path}><div>{opcion.name}</div></Link>)}
            </div>
        )
    }
}

export default Menu;
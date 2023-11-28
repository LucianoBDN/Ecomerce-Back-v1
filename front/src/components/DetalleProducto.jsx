import React from 'react'
import {Link} from 'react-router-dom'

function DetalleProducto({ producto }) {
    return (
        <div>
            <ul>
                <li><img src={producto.img} alt={producto.nombre} /></li>
                <li>{producto.nombre}</li>
                <li>{producto.descripcion}</li>
                <li>{producto.precio}</li>
                <li>{producto.marca}</li>
            </ul>
            <Link to={`/editarproducto/${producto.idproducto}`}><li>Editar</li> </Link>
            <button>Eliminar</button>
            <hr />
        </div>
    );
}
export default DetalleProducto
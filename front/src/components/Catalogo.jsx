import React, { useEffect, useState } from 'react'
import DetalleProducto from './DetalleProducto'
import Footer from './Footer'
import Navbar from './Navbar'
import axios from 'axios'

function Catalogo() {

    const [dataproducto, setDataproducto] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/productos/catalogo').then(res => {
            console.log(res.data)
            setDataproducto(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    //mapeo de 
    const listaproductos = dataproducto.map(producto =>{
        return(
            <div key={producto.idproducto}>
                <DetalleProducto producto={producto}/>
            </div>
        )
    })


    return (
        <>
        <Navbar/>
            <h2>Lista de Productos</h2>
            {listaproductos}
        <Footer/>
        </>
    )
}
export default Catalogo
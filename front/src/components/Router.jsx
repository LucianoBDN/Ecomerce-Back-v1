import React from 'react'
import Home from './Home'

//import Ofertas from './Ofertas'
import Contacto from './Contacto'
import { Route, Routes, Navigate } from 'react-router-dom'
import AgregarProducto from './AgregarProducto'
import Catalogo from './Catalogo'
import EditarProducto from './EditarProducto'


const Paginas = () => {
    return (
        <>


            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Catalogo" element={<Catalogo/>} />
                <Route path="/AgregarProducto" element={<AgregarProducto/>} />
                <Route path="/Contacto" element={<Contacto/>} />
                <Route path="/editarproducto/:idproducto" element={<EditarProducto/>} />
                <Route path='*' element={<Navigate to="/"/>}/>
            </Routes>


        </>
    )
}
export default Paginas
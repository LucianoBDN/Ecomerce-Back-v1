import React from "react";
import './Navbar.css';
import { useState } from 'react'
import sportStrade from '../assets/img/logo-ecomerce-nav.png';
import carrito from '../assets/img/carrito-de-compras.png';
import hamburger from '../assets/img/menu-hamburguesa.png';
import { Link } from "react-router-dom";




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <nav className="Nav_bar">
            <button id="abrir" className={`burguer ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <img src={hamburger} alt="" />
            </button>
            <div className={`nav_visible ${isMenuOpen ? 'container_nav_item' : ''}`}>
                
                    <ul className="nav">
                        <li><Link className="Link" to="/Catalogo" >Catalogo</Link></li>
                        <li><Link className="Link" to="/AgregarProducto" >Agregar</Link></li>
                        <li><Link className="Link" to="/Contacto" >Contacto</Link></li>
                    </ul>
            </div>
            <div className="logo">
            <Link className="Link" to="/" ><img className="sportstrade" src={sportStrade} alt="..." /></Link>
            </div>
            <div className="carrito">
                <img className="carrito" src={carrito} alt="" />
            </div>
        </nav>


    )
}

export default Navbar
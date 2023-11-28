import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='Contactos'>
                <ul className='lista-footer'>
                    <li>Quienes somos</li>
                    <li>Preguntas frecuentes</li>
                    <li>Sucursales</li>
                </ul>
                <ul className='lista2-footer'>
                    <li>Formas de pago</li>
                    <li>Terminos y condiciones</li>
                    <li>Compras online</li>
                </ul>
            </div>
            <div className='final'>
                <div className="icons-redes">
                    <i className="fa-brands fa-facebook"><Link /></i>
                    <i className="fa-brands fa-instagram"><Link /></i>
                    <i className="fa-brands fa-whatsapp"><Link /></i>
                </div>
                
                <div className="copyright">
                    <p>Copyright © 2023 SportStrade</p>
                </div>
            </div>
        </footer>


    )
}

export default Footer

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Productos.css';
import productosData from '../json/productos.json';
import adidas from '../assets/img/logos-de-marcas/adidas2.png';
import jordan from '../assets/img/logos-de-marcas/Jordan2.png';
import nike from '../assets/img/logos-de-marcas/nike2.png';
import puma from '../assets/img/logos-de-marcas/puma.png';

function Productos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productosPerPage] = useState(8);
  const [ordenAlfabetico, setOrdenAlfabetico] = useState('asc');
  const [productosOriginal] = useState(productosData.data[0].data);
  const [searchTerm, setSearchTerm] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    // Filtrar productos cuando searchTerm, productosOriginal u ordenAlfabetico cambian.
    const productosFiltrados = ordenarAlfabeticamente(
      productosOriginal.filter((producto) =>
        producto.product.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProductosFiltrados(productosFiltrados);
  }, [searchTerm, productosOriginal, ordenAlfabetico]);

  const cambiarOrdenAlfabetico = () => {
    setOrdenAlfabetico(ordenAlfabetico === 'asc' ? 'desc' : 'asc');
  };

  const ordenarAlfabeticamente = (productos) => {
    return productos.slice().sort((a, b) => {
      const nombreA = a.product.toLowerCase();
      const nombreB = b.product.toLowerCase();
      return ordenAlfabetico === 'asc' ? nombreA.localeCompare(nombreB) : nombreB.localeCompare(nombreA);
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProducto = currentPage * productosPerPage;
  const indexOfFirstProducto = indexOfLastProducto - productosPerPage;
  const productosPaginaActual = productosFiltrados.slice(indexOfFirstProducto, indexOfLastProducto);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario recargue la página al presionar "Enter".
    // Los productos ya se filtran automáticamente debido al efecto useEffect.
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sidebar">
          <h2>Filtrar por</h2>
          <form onSubmit={handleSearchSubmit}>
            <div className="search-container">
              <div className="search-bar">
                <input

                  type="text"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>

            </div>
          </form>
          <button onClick={cambiarOrdenAlfabetico}>
            Ordenar A-Z
          </button>

          <div className="img-stack">
            <img src={nike} alt="" />
            <img src={adidas} alt="" />
            <img src={jordan} alt="" />
            <img src={puma} alt="" />
          </div>
        </div>

        <div className="product-list">
          {productosPaginaActual.map((producto) => (
            <div key={producto.id} className="product-card">
              <img src={producto.cover} alt={producto.product} />
              <h3>{producto.product}</h3>
              <p className="price">${parseFloat(producto.price).toLocaleString('es-ES', { minimumFractionDigits: 0 })}</p>
              <p className="delivery">Envío gratis</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(productosFiltrados.length / productosPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Productos;

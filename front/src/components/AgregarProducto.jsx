import React, { useState } from 'react';
import uniquid from 'uniqid';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function AgregarProducto() {
    // hooks
    const [img, setImg] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [marca, setMarca] = useState('');

    function handleFileChange(e) {
        const file = e.target.files[0];
        setImg(file);
    }

    function AgregarProducto() {
        // Usar FormData para enviar el archivo correctamente
        const formData = new FormData();
        formData.append('img', img);
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('marca', marca);
        formData.append('idproducto', uniquid());

        axios.post('/api/productos/agregarproducto', formData)
            .then(res => {
                alert(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <Navbar />
            <section className='addProduct row'>
                <h1>Agregar Zapatillas</h1>
                <div>
                    <label htmlFor="img">
                        Imagen del producto
                        <input type="file" id='img' onChange={handleFileChange} />
                    </label>
                </div>
                <div>
                    <label htmlFor='nombre'>
                        Nombre Del Producto
                        <input type='text' id='nombre' name='nombre' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor='descripcion'>
                        Descripcion Del Producto
                        <input type="text" id='descripcion' name='descripcion' value={descripcion} onChange={(e) => { setDescripcion(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor="precio">
                        Precio Del Producto
                        <input type="text" id='precio' name='Precio' value={precio} onChange={(e) => { setPrecio(e.target.value) }} />
                    </label>
                </div>
                <div>
                    <label htmlFor="marca">
                        Marca Del Producto
                        <input type="text" id='marca' name='marca' value={marca} onChange={(e) => { setMarca(e.target.value) }} />
                    </label>
                </div>
                <button onClick={AgregarProducto} >Agregar Producto</button>
            </section>
            <Footer />
        </>
    );
}

export default AgregarProducto;

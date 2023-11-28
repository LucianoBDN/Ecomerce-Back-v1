import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditarProducto() {
    const params = useParams();
    const [img, setImg] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [marca, setMarca] = useState('');

    useEffect(() => {
        // Realizar una solicitud GET para obtener los datos del producto
        axios.get(`/api/producto/obtenerdataproducto?idproducto=${params.idproducto}`)
            .then(res => {
                // Manejar los datos del producto
                const dataproducto = res.data[0];
                setImg(dataproducto.img);
                setNombre(dataproducto.nombre);
                setDescripcion(dataproducto.descripcion);
                setPrecio(dataproducto.precio);
                setMarca(dataproducto.marca);
            })
            .catch(error => {
                console.error('Error en la solicitud Axios:', error);
            });
    }, [params.idproducto]);

    function handleFileChange(e) {
        const file = e.target.files[0];
        setImg(file);
    }

    function editarProducto() {
        // Usar FormData para enviar el archivo correctamente
        const formData = new FormData();
        formData.append('img', img);
        formData.append('nombre', nombre);
        formData.append('descripcion', descripcion);
        formData.append('precio', precio);
        formData.append('marca', marca);
        formData.append('idproducto', params.idproducto);  // Agregar el idproducto a los datos del formulario

        axios.post('/api/productos/agregarproducto', formData)  // Cambiar la URL según tus necesidades
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
                <h1>Editar Producto</h1>
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
            <button onClick={editarProducto} >Guardar Cambios</button>
        </section>
        <Footer />
    </>
);
}

export default EditarProducto;

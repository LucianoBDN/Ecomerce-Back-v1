const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer'); 
const esquema = mongoose.Schema;

const esquemaProductos = new esquema({
    img: String, 
    nombre: String,
    descripcion: String,
    precio: String,
    marca: String,
    idproducto: String
});

const modeloProducto = mongoose.model('productos', esquemaProductos);

router.use(express.json());

// Configuración de Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Ruta para agregar productos
router.post('/agregarproducto', upload.single('img'), async (req, res) => {
    try {
        const nuevoProducto = new modeloProducto({
            img: req.file.img, 
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            marca: req.body.marca,
            idproducto: req.body.idproducto
        });

        await nuevoProducto.save();
        res.status(200).send('Producto añadido correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar el producto');
    }
});

// Mostrar todos los productos
router.get('/catalogo', async (req, res) => {
    try {
        const docs = await modeloProducto.find({});
        console.log("Resultados:", docs);
        res.send(docs);
    } catch (err) {
        console.error("Error al buscar documentos:", err);
        res.status(500).send("Error interno del servidor");
    }
});

router.get('/obtenerdataproducto', async (req, res) => {
    try {
        const idproducto = req.query.idproducto; // Obtén el idproducto de los parámetros de consulta (query params)
        
        if (!idproducto) {
            return res.status(400).json({ error: 'Id de producto no proporcionado' });
        }

        const docs = await modeloProducto.find({ idproducto });
        
        if (!docs || docs.length === 0) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        console.log("Resultados:", docs);
        res.json(docs);
    } catch (err) {
        console.error("Error al buscar documentos:", err);
        res.status(500).send("Error interno del servidor");
    }
});




module.exports = router;

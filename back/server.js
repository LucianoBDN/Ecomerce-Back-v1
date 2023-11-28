const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())

//importacion de rutas de producto
const rutasProducto = require('./routes/Productos')
app.use('/api/productos', rutasProducto)

//importacion de body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

//configuracion del server node
app.get('/', (req, res) => {
    res.send('Bienvenidos al servidor del back...')
});

app.listen(5000, function(){
    console.log('listening on port 5000')
});

//conexion a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/sportstrade')
    .then(() => console.log('Connected to MongoDB!'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));


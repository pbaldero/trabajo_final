const express = require('express'); //Imporatamos todos modulos
const path = require('path');
const mysql = require('mysql');
const util = require('util');

const app = express(); //Creamos instancia de express
const port = 3000; //Definimos el puerto

const conexion = mysql.createConnection({ //Configurar conexion mysql
    host: 'localhost',
    database: 'test',
    user: 'root',
    password: '1234'
});

const connect = util.promisify(conexion.connect).bind(conexion); //Añadimos funciones de mysql
const query = util.promisify(conexion.query).bind(conexion);

app.use(express.json());

// Ruta para llegar a nuestra pagina principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'principal.html'));
});

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Manejar consultas
app.post('/consulta', async (req, res) => {
    const sqlQuery = req.body.query;
    try {
        await connect();
        console.log('CONEXION EXITOSA');

        const results = await query(sqlQuery);
        res.json(results);

    } catch (error) {
        console.error('Error en la operación:', error);
        res.status(500).send('Error en la consulta a la base de datos');
    }
});

// Iniciar server
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

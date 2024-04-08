const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3002;


//CONFIGURO EL HEADER CON EL QUE HACER LAS PETICIONES A LA API.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token');
    next();
});

//POST --> RECIBE DE REACT URL Y DEVUELVE EL RESULTADO DE LA PETICIÓN
app.post('/api/football-info', async (req, res) => {
    //OBTEGO LA URL QUE MANDO EN LA REQUEST DESDE REACT.
    try {
        const url = req.body
        const response = await axios.get(url, {
            headers: {
                'X-Auth-Token': '13f4273034d64c8d93015d3881f2457a' // Reemplaza 'tu_token_de_autorizacion' con tu token real
            }
        });
        res.json(response.data);
        console.log(response.data)
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        res.status(500).json({ error: 'Error al obtener los datos de la API' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor intermedio escuchando en el puerto ${PORT}`);
});
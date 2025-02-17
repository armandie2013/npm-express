import express from 'express';

// Creamos una instancia y definimos el puerto de escucha del servidor //
const app = express();
const PORT = 3000;


// Definimos la ruta GET 
app.get('/profile', (req, res) => {
    const edad = req.query.edad;
    console.log(`Edad recibida: ${edad}`);
    res.send(`Edad del perfil: ${edad}`);

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
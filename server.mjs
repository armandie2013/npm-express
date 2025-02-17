import express from "express";

// Creamos una instancia y definimos el puerto de escucha del servidor //
const app = express();
const PORT = 3000;

// Definimos la ruta GET
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`ID del usuario recibido: ${userId}`);
  res.send(`Perfil del usuario con ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

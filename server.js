const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'public'); //path.join(__dirname, 'public'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

// Configurar el middleware CORS con la configuración personalizada
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

// Ruta para el archivo raíz
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

// Ruta para el archivo raíz
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
  });
  

// Rutas para los archivos HTML individuales
app.get('/nosotros', (req, res) => {
  const filePath = path.join(__dirname, 'nosotros.html');
  res.sendFile(filePath);
});

app.get('/recomendaciones', (req, res) => {
  const filePath = path.join(__dirname, 'recomendaciones.html');
  res.sendFile(filePath);
});

app.get('/restaurantes', (req, res) => {
  const filePath = path.join(__dirname, 'restaurantes.html');
  res.sendFile(filePath);
});

app.get('/top10', (req, res) => {
  const filePath = path.join(__dirname, 'top10.html');
  res.sendFile(filePath);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está funcionando en http://localhost:${port}`);
});

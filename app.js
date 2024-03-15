const express = require('express');
const app = express();

const PORT=4001;


const mainRoutes = require('./src/routes/mainRoutes');
const charactersRoutes= require('./src/routes/charactersRoutes');

app.use(express.urlencoded());
app.use(express.json());


app.get('/', mainRoutes);
app.use('/api',charactersRoutes);


app.listen(PORT,()=>console.log(`Servidor corriendo en http://localhost:${PORT}`));
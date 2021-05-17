const express = require('express');
const router = require('express').Router;
const plantsModule = require('./plantsModule');
const PORT = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Exercício Bloco 30 dia 01');
})

app.get('/plants', (req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants)
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsModule.getPlantById(parseInt(id, 10));
  res.send(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plants = plantsModule.removePlantById(parseInt(id, 10));
  res.send(plants);
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const updatePlant = req.body;
  const plant = plantsModule.editPlant((parseInt(id, 10), updatePlant));
  res.send(plant);
});

app.post('/plant/', (req, res) => {
  const addPlant = req.body;
  const plant = plantsModule.createNewPlant(addPlant);
  res.send(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
})



app.listen(PORT, () => console.log(`App iniciado na porta ${PORT}`));
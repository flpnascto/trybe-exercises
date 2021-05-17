const plants = require('./defaultPlants');

const getPlants = () => plants;

const getPlantById = (id) => plants
  .filter((plant) => plant.id === id);

const removePlantById = (id) => {
  plants = plants.filter((plant) => plant.id !== id);
};

const editPlant = (plantId, newPlant) => {
  return plants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const orginValue = (origin) => {
  if (origin === 'Brazil') return 8;
  return 7;
};

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + originValue(origin)
    : (size / 2) * 1.33 + originValue(origin);
};

const initPlant = (id, { breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = calculateWaterFrequency(needsSun, size, origin)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const createdPlants = plants.length;

const createNewPlant = (plant) => {
  const newId = createdPlants + 1;
  const mappedPlant = initPlant(newId, { ...plant });
  plants.push(mappedPlant);
  return mappedPlant;
};

const needSun = (plant) => {
  return plant.needsSun;
}

const specialCare = (plant) => {
  return (plant.specialCare.waterFrequency > 2)
}

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlant = plants
    .filter((plant) => plant.id !== id)
    .filter((plant) => needSun(plant))
    .filter((plant) => specialCare(plant))

  return filteredPlants;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
}
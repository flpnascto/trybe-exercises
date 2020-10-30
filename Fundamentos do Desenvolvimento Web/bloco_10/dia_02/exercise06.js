const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimal = Animals.find((animal) => animal.name === name);
      if (foundAnimal) {
        return resolve(foundAnimal);
      }

      return reject('Nenhum animal com esse nome!');
    }, 3000);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name);
}

module.exports = getAnimal;

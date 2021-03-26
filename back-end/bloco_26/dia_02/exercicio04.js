const fs = require('fs/promises');

function getData() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => {
      return JSON.parse(data);
    })
    .catch(e => {
      return `Dados não encontrados.\n${e}`
    })
}

async function printCharacters() {
  const data = await getData();
  data.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

async function findById(characterId) {
  const data = await getData();
  // const character = data.filter(({ id }) => characterId.toString() === id);
  return new Promise((resolve, reject) => {
    (data.find(({ id }) => characterId.toString() === id))
      ? resolve((data.filter(({ id }) => characterId.toString() === id))[0])
      : reject(`ID: ${characterId} não encontrado`)
  })
}

async function deleteById(characterId) {
  const data = await getData();
  const newData = data.filter(({ id }) => characterId.toString() !== id)
  await fs.writeFile('./simpsons.json', JSON.stringify(newData))
}

async function createFamily(idList) {
  const familyAsync = idList.map(async (id) => await findById(id));
  await Promise.all(familyAsync)
    .then((values) => fs.writeFile('./simpsonFamily.json', JSON.stringify(values)));
}

async function createChar() {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((data) => {
      return JSON.parse(data);
    })
  data.push({ "id": "5", "name": "Nelson Muntz" });

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
}

async function updateChar() {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8')
    .then((data) => {
      return JSON.parse(data);
    })
  data[4].name = "Maggie Simpson";

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(data));
}


async function lerDados() {
  try {
    printCharacters();
    const char = await findById(1);
    console.log(char);
    await deleteById(10);
    await deleteById(6);
    await createFamily([1, 2, 3, 4]);
    await createChar();
    await updateChar();


  } catch (error) {
    console.error(error);
  }

}

lerDados();
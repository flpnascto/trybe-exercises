const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// exercício 01 - Função que adiciona chave e valor a um objeto.
function addTurn(objectToChange, newKey, keyValue) {
  objectToChange[newKey] = keyValue;
  return objectToChange;
}

// exercício 02 - Função que lista as keys de um objeto.
function viewKeys(object) {
  return Object.keys(object);
}

// exercício 03 - Função que mostra o tamanho de um objeto.
function objectLength(object) {
  return Object.keys(object).length;
}

// exercício 04 - Função que lista os valores de um objeto.
function viewValues(object) {
  return Object.values(object);
}

// exercício 05 - Objeto que contém outros objetos.
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

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

// exercicio 01 - Função que adiciona chave e valor a um objeto.
function addTurn(objectToChange, newKey, keyValue) {
  objectToChange[newKey] = keyValue;
  return objectToChange;
}

// exericio 02 - Função que lista as keys de um objeto.
function viewKeys(object) {
  return Object.keys(object)
}


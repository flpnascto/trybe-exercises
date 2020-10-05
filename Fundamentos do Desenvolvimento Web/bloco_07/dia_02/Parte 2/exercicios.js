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
// console.log(allLessons);

// exercício 06 - Função que retorna o total de estudantes.
function studentTotal(object) {
  let total = 0;
  for (let i = 0; i < objectLength(object); i += 1) {
    for (let j = 0; j < Object.keys(object)[i].length; j += 1)
    if (Object.keys(Object.values(allLessons)[i])[j] === 'numeroEstudantes') {
      total += Object.values(Object.values(allLessons)[i])[j];
    }
  }
  return total
}
console.log(studentTotal(allLessons))

// exercício 07 - Função que retorna o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(getValueByNumber(lesson1, 0));

// exercício 08 - 
function verifyPair(object, key, value) {
  const pares = Object.entries(object)
  for (let index in pares) {
    if (pares[index][0] === key && pares[index][1] === value) {
      return true;
    }
  }
  return false;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

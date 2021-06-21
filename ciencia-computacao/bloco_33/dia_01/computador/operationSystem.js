const SecondaryMemory = require('./SecondaryMemory')
const MainMemory = require('./MainMemory')

const secondaryMemory = new SecondaryMemory()
const mainMemory = new MainMemory()

const randomNumberLength = 200;
const minNumberValue = 10000;
const maxNumbervalue = 99999;

function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

// Conjunto de números aleatórios a serem somados
const randomNumbers = [];

function createRandomNumbers(length) {
  for (let index = 0; index < length; index += 1) {
    const number = getRandomNumber(minNumberValue, maxNumbervalue)
    randomNumbers.push(number.toString())
  }
}

createRandomNumbers(randomNumberLength);

// Carregando todos os números em memória (principal e secundária)
randomNumbers.forEach((number) => {
  secondaryMemory.load(number)
  mainMemory.load(number)
})

// Interando sobre os números carregados na MEMORIA PRINCIPAL e realizando a soma
let initialMainMemoryTime = Date.now()
let mainMemorySum = 0
for (let i = 0; i < randomNumbers.length; i++) {
  mainMemorySum += mainMemory.get(i)
}
console.log(`Memória Principal\nSoma: ${mainMemorySum} Tempo gasto: ${Date.now() - initialMainMemoryTime}ms\n`)

// Interando sobre os números carregados na MEMORIA SECUNDARIA e realizando a soma
let initialSecondaryMemoryTime = Date.now()
let secondaryMemorySum = 0
for (let i = 0; i < randomNumbers.length; i++) {
  secondaryMemorySum += secondaryMemory.get(i)
}
console.log(`Memória Secundária\nSoma: ${secondaryMemorySum} Tempo gasto: ${Date.now() - initialSecondaryMemoryTime}ms`)

secondaryMemory.clean()
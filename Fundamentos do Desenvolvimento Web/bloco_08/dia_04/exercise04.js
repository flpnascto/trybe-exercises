const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
const bornIn20Century = (yearBorn) => yearBorn > 1900 && yearBorn <= 2000;

function filterPeople(people) {
  return people.filter(
    ({ nationality, bornIn }) => nationality === 'Australian' && bornIn20Century(bornIn)
  );
}

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], {
  name: 'Nicole',
  bornIn: 1992,
  nationality: 'Australian',
});
assert.deepStrictEqual(filteredPeople[1], {
  name: 'Toby',
  bornIn: 1901,
  nationality: 'Australian',
});

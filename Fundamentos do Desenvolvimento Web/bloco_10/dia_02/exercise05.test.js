beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

/* resultado do console.log:
Executa primeiro (A) o beforeEach, depois o teste e por fim o afterEach
No próximo paso (B) irá executar o describe, mas antes executa o
beforeEac externo, depois o interno, então o test interno.
E por fim executa o afterEach interno e depois o externo.

A - 1 - beforeEach
A - 1 - test
A - 1 - afterEach
B - 1 - beforeEach
B - 2 - beforeEach
B - 2 - test
B - 2 - afterEach
B - 1 - afterEach
*/
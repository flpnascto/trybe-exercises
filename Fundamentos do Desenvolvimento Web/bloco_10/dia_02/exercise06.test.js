const { getAnimal, getAnimalsAges } = require('./exercise06')

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', async () => {
      expect.assertions(1);
      await getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      await getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - getAnimalsAges', () => {
  
  test('Se existir retorne o objeto dos animais e idades', async () => {
    expect.assertions(1);
    await getAnimalsAges(1).then(result => {
      expect(result).toEqual([
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
      ]);
    });
  });
  test('Se não encontrado',  async () => {
    expect.assertions(1);
    await getAnimalsAges(10).catch(error =>
      expect(error).toEqual('Nenhum animal encontrado')
    );
  })
});

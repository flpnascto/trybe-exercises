const uppercase = require('./exercise01');

test('Verificando se todas as letras são maiúsculas', done => {
  uppercase('Felipe', (string) => {
    expect(string).toMatch('FELIPE');
    done();
  });
});

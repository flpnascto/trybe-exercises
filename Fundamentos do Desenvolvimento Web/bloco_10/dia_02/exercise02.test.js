const { users, getUserName } = require('./users');

test('retorna o Nome de getUserName quando o usuário é encontrado', ()=> {
  return expect(getUserName('4')).resolves.toBe('Mark');
});

test('retorna o Erro de getUserName quando o usuário não é encontrado', ()=> {
  const id = 1;
  return expect(getUserName(id))
  .rejects.toEqual({ 'error': `User with ${id} not found.`});
});
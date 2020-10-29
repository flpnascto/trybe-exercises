const { users, getUserName } = require('./users');

test('retorna o Nome de getUserName quando o usuário é encontrado', async ()=> {
  const data = await getUserName('4')
  expect(data).toBe('Mark');
});

test('retorna o Erro de getUserName quando o usuário não é encontrado', async ()=> {
  const id = 1;
  await expect(getUserName(id))
  .rejects.toEqual({ 'error': `User with ${id} not found.`});
});
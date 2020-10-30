const getRepos = require('./exercise04');

describe('Verifica a existência dos respositórios', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  test('repositório: sd-01-week4-5-project-todo-list', async () => {
    await expect(getRepos(url)).resolves.not.toContainEqual('sd-01-week4-5-project-todo-list')
  })

  test('repositório: sd-01-week4-5-project-meme-generator', async () => {
    await expect(getRepos(url)).resolves.not.toContainEqual('sd-01-week4-5-project-meme-generator')
  })

});
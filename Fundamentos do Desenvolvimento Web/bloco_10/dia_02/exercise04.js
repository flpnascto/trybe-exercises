const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

module.exports = getRepos;
// const url = 'https://api.github.com/users/tryber/repos';
// console.log(await getRepos(url))

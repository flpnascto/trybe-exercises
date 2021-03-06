# Express: HTTP com Node.js
## Conteúdo
Você vai relembrar alguns conceitos importantes sobre o que é o HTTP, além de entender o que é uma API e para que elas servem.
Você vai aprender como utilizar um dos mais famosos e importantes frameworks na construção de APIs com Node: o **Express**!
Você vai entender como ele funciona e como seu sistema de rotas e middlewares se encaixam para formar uma aplicação pronta para ir para a produção.
## Objetivos
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.
## Exercícios
1. Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos.
2. Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" }.
3. Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" } .
4. Crie um endpoint que receba requisições do tipo POST no caminho /hello , contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" } . Caso o usuário tenha idade superior a 17 anos, retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 . Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401 ;
5. Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" } .
6. Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo JSON [simpsons.json]().
    - Utilize o modulo fs do Node para ler/escrever arquivos.
    - Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
    - Caso dê tudo certo, a resposta deve voltar com status 200 OK.
    - Foque os contratos das APIs (o que elas devem receber e o que devem retornar).
    - Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.
7. Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
8. Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
    - Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.
9. Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
    - O corpo da requisição deve receber os campos id e name ;
_Bônus_: A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400.
## Exercícios Bônus
1. Caso algum endpoint que não consta nessa lista receba uma requisição, a resposta deve voltar com status 404 Not Found , sem corpo.
2. Todos os endpoints devem receber um token de autenticação. Esse token deve vir no seguinte modelo: authorization: {token-aqui} . Nesse momento, como você não está salvando os tokens gerados no cadastro em nenhum lugar, só é preciso verificar que as requisições recebem um token no header que possua 16 caracteres.
    - Caso o token seja inválido ou inexistente, a resposta deve voltar com status 401 Unauthorized e { message: 'Token inválido!' } no corpo.
3. O caminho do endpoint de autenticação deve ser /signup .
    - As requisições para esse endpoint deverão utilizar o método POST e devem receber, no corpo da requisição, os campos email , password , firstName e phone .
    - Caso todos os requisitos acima sejam atendidos, um token aleatório, composto por letras e números, com 16 caracteres, deve ser retornado. Para gerar o token você pode utilizar a função randomBytes , do módulo crypto do node, dessa forma:
```js
const crypto = require('crypto');

function generateToken () {
  return crypto.randomBytes(8).toString('hex');
}

module.exports = generateToken;
  ```

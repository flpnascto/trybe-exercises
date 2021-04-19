# NodeJS - JWT - (JSON Web Token)
## Conteúdo
Hoje você aprenderá o que é o JWT (JSON Web Token), por que utilizá-lo, sua importância, como criar uma API com autenticação JWT e cases de empresas que estão utilizando essa tecnologia!
## Objetivos
- Entender o que há por dentro de um token de autenticação;
- Gerar tokens a partir de informações como login e senha;
- Autenticar rotas do Express, usando o token JWT.
## Exercícios
Antes de começar, crie um novo projeto chamado `hello-jwt` utilizando o comando `npm init @tryber/backend hello-jwt`, aceitando as opções padrão.
### Exercício 01
1. Crie um endpoint **POST /login**. O endpoint deve receber os seguintes dados no corpo da requisição:
```json
{
  "username": "someUsername",
  "password": "somePassword"
}
  ```
2. Caso **username** e **password** sejam válidos, retorne um token que atenda às seguintes especificações:
- Expira em uma hora;
- Contém, no payload, o nome de usuário informado na request;
- Contém, no payload, uma propriedade **admin** , com o valor **false**.
3. Para retornar o token, utilize o seguinte formato no corpo da resposta:
```json
{
  "token": "<JWT aqui>"
}
```
4. Para que **username** seja válido, seu valor precisa ser uma string alfanumérica de, pelo menos, 5 caracteres. Para que **password** seja válido, seu valor precisa ser uma string de, pelo menos, 5 caracteres.
### Exercício 02
1. Altere o endpoint **POST /login**
2. Caso **username** seja `admin` e **password** seja `s3nh4S3gur4???`, a chave `admin` no payload do token gerado deve ter o valor `true`.
### Exercício 03
1. Crie o endpoint **/GET /users/me**
2. O endpoint só pode ser acessado por pessoas autenticadas
3. Para realizar a autenticação, a requisição deve conter o header **Authorization** , cujo valor deve ser um token válido
4. Caso o token não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:
```json
{
  "error": {
    "message": "Token not found"
  }
}
```
5. Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:
```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```
6. Caso o token seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele token pertence e o valor da propriedade `admin`, no seguinte formato:
```json
{
  "username": "nome de usuario do token",
  "admin": true || false
}
```
7. Utilize um middleware exclusivo para a autenticação. Armazene-o no arquivo middlewares/auth.js
### Exercício 04
1. Crie o endpoint **/GET /top-secret**
2. O endpoint só pode ser acessado por pessoas autenticadas.
3. Apenas tokens contendo, no payload, a propriedade admin com o valor true podem acessar esse endpoint.
4. Caso o token não exista, retorne o status `401 Unauthorized`, com o seguinte corpo da resposta:
```json
{
  "error": {
    "message": "Token not found"
  }
}
```
5. Caso aconteça um erro ao validar o token, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:
```json
{
  "error": {
    "message": "<mensagem de erro da biblioteca>"
  }
}
```
6. Caso o token seja válido, mas a propriedade admin do payload não seja true , retorne o status `403 Forbidden` e o seguinte JSON:
```json
{
  "error": {
    "message": "Restricted access"
  }
}
```
7. Caso o token seja válido e o payload contenha admin com o valor `true`, retorne o seguinte JSON:
```
{
  "secretInfo": "Peter Parker é o Homem-Arannha"
}
```
8. Para validar se a pessoa é admin, crie um novo middleware no arquivo middlewares/admin.js .
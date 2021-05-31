# Sockets - Socket.io
## Conteúdo
O tópico de hoje será sobre uma ferramenta: uma extensão de _sockets_, uma forma nova e prática de desenvolver funcionalidades do mundo real sem muita dor de cabeça. Apresentamos-lhes o **socket.io**! 🎉
O `socket.io` é um pacote _JavaScript_ que funciona tanto no front-end quanto no back-end, ou seja, você pode importá-lo tanto no Node.js quanto no seu projeto React, Angular, Vuejs ou até mesmo em um projeto sem nenhuma framework. Esse pacote nos permite implementar ações _real time_ em nossa aplicação, como um sistema de notificação!

Sockets são um padrão de comunicação muito usado em aplicações _real time_. Contudo, usar o pacote _NET_ do `Node.js` é muito custoso quando precisamos fazer uma aplicação de grande porte, e é nesses momentos que temos outras bibliotecas para nos ajudar.
Diferentemente da aplicação que fizemos na aula anterior, o `socket.io` nos permite implementar mecanismos mais complexos do que o que fizemos e de um forma até mais simples do que a que vimos. Alguns exemplos dos mecanismos mais complexos que podemos implementar são: controle de salas, limite do número de users conectados no servidor, trabalhar com eventos de uma maneira mais customizável etc. Vamos ver mais sobre isso hoje!
## Objetivos
- Conseguir desenvolver um server socket usando o **socket.io**;
- Emitir eventos personalizados usando o **socket.io**;
## Exercícios
Antes de começar faça o setup básico para sua aplicação ter a comunicação do socket preparada do lado do cliente e do lado do servidor.
1. Faça com que quando o cliente clicar no elemento com o id `likeIcon`, seja emitido um evento `likePost` para o servidor.
2. Do lado do servidor faça um listener para capturar o evento `likePost` que vai incrementar a quantidade atual de likes do post.
3. Emita um evento `updateLikes` **apenas** para o cliente que enviou o like enviando a quantidade atual de likes.
4. Modifique o código feito no exercício anterior para com que o evento updateLikes seja enviado para todos os clientes conectados.
5. Faça com que o ícone com id `starIcon` emita um evento starPost e atualize a quantidade **diretamente** pelo front-end.
6. No servidor implemente um listener para o evento starPost e emita um evento `updateStars` com a quantidade para todos os clientes exceto o cliente que enviou o evento.
7. Implemente um listener para o evento `updateStars` para atualizar a quantidade atual de estrelas.
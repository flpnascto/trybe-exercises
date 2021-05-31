# Sockets - Socket.io
## Conteúdo
O tópico de hoje será sobre uma ferramenta: uma extensão de _sockets_, uma forma nova e prática de desenvolver funcionalidades do mundo real sem muita dor de cabeça. Apresentamos-lhes o **socket.io**! 🎉
O `socket.io` é um pacote _JavaScript_ que funciona tanto no front-end quanto no back-end, ou seja, você pode importá-lo tanto no Node.js quanto no seu projeto React, Angular, Vuejs ou até mesmo em um projeto sem nenhuma framework. Esse pacote nos permite implementar ações _real time_ em nossa aplicação, como um sistema de notificação!

Sockets são um padrão de comunicação muito usado em aplicações _real time_. Contudo, usar o pacote _NET_ do `Node.js` é muito custoso quando precisamos fazer uma aplicação de grande porte, e é nesses momentos que temos outras bibliotecas para nos ajudar.
Diferentemente da aplicação que fizemos na aula anterior, o `socket.io` nos permite implementar mecanismos mais complexos do que o que fizemos e de um forma até mais simples do que a que vimos. Alguns exemplos dos mecanismos mais complexos que podemos implementar são: controle de salas, limite do número de users conectados no servidor, trabalhar com eventos de uma maneira mais customizável etc. Vamos ver mais sobre isso hoje!
# Objetivos
- Conseguir desenvolver um server socket usando o **socket.io**;
- Emitir eventos personalizados usando o **socket.io**;
# Exercícios
1. Envie a mensagem recebida no servidor para todos os outros clientes, exceto para quem a enviou.
2. Adicione um nickname para cada pessoa usuária. Os nomes não precisam vir da pessoa usuária/front-end.
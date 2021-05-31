# Sockets - TCP/UDP & NET
## Conteúdo
Nesta aula iremos aprender como é feita a comunição entre máquinas através da rede, usando o tão famoso **protocolo TCP/IP**. Além disso, aprenderemos um pouco mais sobre como essas informações trafegam na rede.

Sockets permitem a comunicação entre computadores. Um exemplo de sockets usados para comunicação são as APIs que desenvolvemos em aulas passadas. A comunicação feita entre um site e uma API (que está em um servidor remoto) é feita através de um socket.
Essa tecnologia existe na maioria dos sistemas operacionais e linguagens de programação, possibilitando a quem desenvolve o estabelecimento de comunicação de aplicações que necessitam transmitir/receber dados através da internet e, também, desenvolver serviços de rede, como servidores web, _FTP_, _SSH_ ou qualquer outro baseado em _TCP/IP_.
# Objetivos
- Usar o pacote NET do `Node.js` para criar aplicações que trafeguem mensagens através de **sockets**.
# Exercícios
Utilize o pacote `NET` para ver, na prática, como é trafegar dados via sockets pelo `Node.js`!
1. Como vocês viram nos exemplos acima, a conexão nunca fica ligada por muito tempo, pois assim que recebemos e respondemos, a conexão é desligada. Por esse motivo, experimentem remover a resposta do servidor e veja quanto tempo a conexão fica ligada!
2. Através do método `server.getConnections((err, count) => {})` , imprima quantas conexões estão de pé.
- **Observação**: Abra um terminal para o server e dois ou três para os clientes. Para cada cliente conectado, deverá ser impresso no server a quantidade de clientes conectados. Conecte todos os clientes e depois vá desconectando e conectando-os para você ver, na prática, como são feitas as conexões abertas que citamos no material.
3. Envie uma mensagem do cliente para o servidor.

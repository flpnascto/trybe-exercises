# NodeJS - Fluxo Assíncrono
## Conteúdo
Hoje você vai aprender como o NodeJS funciona **por debaixo dos panos**, de quais "pedaços" ele é composto, e o que faz cada "parte" do **runtime**. Aprenderá também alguns conceitos importantes que todo programador JavaScript precisa saber pra não cair em algumas "armadilhas" que podem aparecer ao longo do caminho.
Vamos passar, de forma geral, por três conceitos:
- Call Stack
- Event Loop
- V8
Esses três conceitos são sempre os mesmos, independente de qual implementação do JavaScript você estiver usando. Ou seja, o que você vai aprender aqui vale tanto pro JS que roda no browser quanto pro código que você executará com o NodeJS.

Como estamos utilizando JavaScript tanto no back-end quanto no front-end, é importante entender como ele funciona, pra que possamos evitar e resolver problemas mais facilmente. Além disso, entender o que são os conceitos de **Event Loop** e **Call Stack** nos permite escrever códigos melhores e mais performáticos, uma vez que entendemos como esse código será executado.
Por último, é importante sabermos por que nunca devemos bloquear o Event Loop, e o que isso significa de fato, para sabermos como escrever código com qualidade da melhor forma possível.
## Objetivos
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona.
## Exercícios
**Exercício 1** : Utilizando apenas funções síncronas, crie um script que leia dois arquivos e:
1. Escreva, no terminal, para cada arquivo, qual foi o tempo necessário para lê-lo do disco;
2. Escreva, no terminal, para cada arquivo, seu tamanho em bytes;
3. Escreva, no terminal, ao final do processo, qual o tempo total necessário para a execução completa do script.
Dica: utilize a função `readFileSync` do módulo `fs` do Node.js.

**Exercício 2** : Crie um script que realize as mesmas funcionalidades que o script do exercício 1, mas utilizando apenas funções assíncronas, de forma que os dois arquivos sejam lidos ao mesmo tempo.
Dica: utilize a função `readFile` do módulo `fs` do Node.js.

**Exercício 3** : Crie um script NodeJS que, utilizando apenas funções síncronas e módulos padrão do NodeJS, receba o nome de uma pasta e:
1. Escreva a quantidade de arquivos existentes dentro dela;
2. Escreva a soma do tamanho de todos os arquivos presentes nela;
3. Escreva no terminal o tempo total de execução do script.
Dica: utilize a função `readFile` do módulo `fs` do Node.js.

**Exercício 4** : Recrie o script do exercício 3 utilizando apenas funções assíncronas.
Dica: utilize a função `readFile` do módulo `fs` do Node.js.

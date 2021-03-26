# NodeJS - Fluxo Assíncrono
## Conteúdo
Hoje você vai aprender o que é e como funciona uma operação assíncrona e entender também qual a sua importância no NodeJS. Para isso, você irá rever duas formas de realizar operações assíncronas em JavaScript: callbacks e Promises, e quais as diferenças entre elas.
Além disso, você verá como é feito **input** (leitura) e **output** (escrita) em arquivos localmente com NodeJS!
Por último, você vai aprender como reescrever código que utiliza callbacks de forma que ele passe a utilizar Promises.

O JavaScript é uma linguagem _single-threaded_, ou seja, executa apenas uma operação de cada vez. Isso quer dizer que, quando temos uma operação demorada no código, toda vez que essa operação é executada, o JavaScript precisa esperar que ela termine antes de fazer qualquer outra coisa.
Para o navegador, isso significa travar até mesmo a renderização da tela e deixar o usuário sem ação nenhuma durante todo o tempo que essa operação demorar para ser completada. Para o servidor, isso quer dizer não conseguir processar nenhuma outra requisição até que determinada operação termine.
Sendo assim, para que possamos escrever aplicações com boa performance e um boa experiência para o usuário, é importante sabermos como realizar operações demoradas de forma **assíncrona**, ou seja, f**ora do contexto de execução do restante do JavaScript**. Esse conhecimento pode ser, muitas vezes, a diferença entre escrever um código bom e performático e escrever um código que não funciona, ou é extremamente lento.
## Objetivos
- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises.
## Exercícios
1. Crie uma função que recebe três parâmetros retorna uma Promise.
    1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
    2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
    3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
    4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
2. Escreva um código para consumir a função construída no exercício anterior.
    1. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100).
    2. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
    3. Utilize then e catch para manipular a Promise retornada pela função:
        + Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
        + Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
3. Reescreva o código do exercício anterior para que utilize async/await.
    + Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async 
4. Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
    + Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    1.0Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson.
    2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
    3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
    4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
    5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
    6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
5. Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
    1. Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
    2. Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt.
    3. Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt . O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!!.
## Exercícios Bônus
1. Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
    1. Pergunte à pessoa usuária qual arquivo ela deseja ler.
    2. Leia o arquivo indicado.
    3. Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
    4. Caso o arquivo exista, escreva seu conteúdo na tela.
2. Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
    1. Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
    2. Leia o arquivo.
    3. Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
    4. Caso o arquivo exista, solicite a palavra a ser substituída.
    5. Solicite a nova palavra, que substituirá a palavra anterior.
    6. Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
    7. Pergunte o nome do arquivo de destino.
    8. Salve o novo arquivo no caminho de destino.
    + Dica: Utilize a classe RegExp do JS para substituir todas as ocorrências da palavra com replace(new RegExp(palavra, 'g'), novaPalavra) .
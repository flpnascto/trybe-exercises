# Jest - Simulando comportamentos

#### Conteúdo
As `Mock functions` são ferramentas que nos permitem simular o comportamento de funções reais.
Imagine o seguinte cenário: em um teste, você tem funções com retornos variáveis, como requisições (imagine uma API que retorne um erro de indisponibilidade em vez do resultado esperado, por exemplo) e funções de retorno aleatório. Não há como testar se de fato elas, ou a lógica que depende delas, estão funcionando. A depender do retorno, o teste às vezes passará, e às vezes não.
Para adereçar esse problema, podemos *simular* o comportamento de tais funções no contexto do teste. No Jest, as `Mock functions` simulam o comportamento de uma função real, apenas no escopo do teste, e nos dão controle sobre qual retorno essa função envia e quantas vezes ela foi chamada, entre outras coisas.

#### Objetivos
* Utilizar o mock functions do Jest para simular funções e seus retornos;
* Testar requisições a uma API sem a necessidade de ter uma conexão real com ela.
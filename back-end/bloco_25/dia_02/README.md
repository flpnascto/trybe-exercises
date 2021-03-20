# Aggregation Framework - Parte 2
## Conteúdo
Hoje você continuará estudando mais estágios e expressões do `aggregation pipeline`. Você trabalhará com operações matemáticas, verá mais combinações de projeções e operações em campos e _strings_.

As operações de agregação são parte essencial no dia a dia de uma aplicação. Saber como utilizar bem os operadores para formatar os dados e tirar leituras e _insights_ deles deve fazer parte do seu conhecimento. Operações aritméticas também são importantes para não sobrecarregar a aplicação com uma carga desnecessária de dados para processamento. Com o `aggregation pipeline`, é possível utilizar a camada de banco de dados para realizar esse processamento!
## Objetivos
- Executar operações de soma e subtração de valores em um _pipeline_;
- Trabalhar com datas em _pipelines_, adicionando ou subtraindo tempo;
- Executar operações de multiplicação e divisão em _pipelines_, utilizando valores fixos ou variáveis;
- Adicionar novos campos aos documentos durante um _pipeline_.
## Exercícios
- Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:
  - arredonde para baixo o valor da idade;
  - calcule a idade usando a diferença entre a data corrente e a data de nascimento;
  - 1 dia é igual a 86400000 milissegundos.
- Exercício 2 : Utilizando o novo campo idade, conte quantos clientes têm entre 18 e 25 anos.
- Exercício 3 : Remova os estágios `$count` e `$match` do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras .
- Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.
- Exercício 5 : Confira o número de documentos retornados pelo pipeline com o método `itcount()`. Até aqui, você deve ter 486 documentos sendo retornados.
- Exercício 6 : Deixe apenas os top 10 clientes com mais compras nesse período.
- Exercício 7 : Para esses clientes, adicione um campo chamado **compras.valorComDesconto** em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra (valorTotal).
- Exercício 8 : Ainda nesse pipeline , descubra os 5 estados com mais compras.
- Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:
```
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
  ```
- Exercício 10 : Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO. Acrescente um campo chamado **dataEntregaPrevista** com valor igual a três dias após a data da venda. Retorne apenas os campos **clienteId**, **dataVenda** e **dataEntregaPrevista**.
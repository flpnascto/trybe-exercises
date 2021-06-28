# Aprendendo Python
## Conteúdo
Hoje, vamos conhecer a linguagem de programação **Python**, onde é utilizada e por que cada vez mais tem se tornado relevante no mundo de programação. Para nos familiarizarmos, vamos escrever nossos primeiros programas.
Aprender linguagens de programação novas é sempre um desafio, porém aumenta sua capacidade de entender diferentes paradigmas. Aprender Python aumenta o seu cinto de ferramentas e lhe traz mais um diferencial. Afinal, para quem só tem um martelo, todo parafuso é prego, e não queremos isso. 🔨
Além disso, cada vez mais o mercado vem oferecendo vagas nesta linguagem, que tem crescido muito na área da ciência de dados.
## Objetivos
- Utilizar o terminal interativo do **Python**;
- Entender e utilizar estruturas condicionais (se, senão se, senão) e de repetição (enquanto, para);
- Criar funções para reutilização de código;
- Escrever seus próprios módulos e como importá-los em outros códigos.
## Exercícios
**Exercício 1**: Crie uma função que receba dois números e retorne o maior deles.

**Exercício 2**: Calcule a média aritmética dos valores contidos em uma lista.

**Exercício 3**: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
```
n = 5

*****
*****
*****
*****
*****
```
🦜 Dica: A função print aceita um parâmetro nomeado end que pode ser utilizado para imprimir sem a quebra de linha. Por exemplo, print(4, end="") e print(2) irá imprimir 42 e depois quebrar a linha.
Sentiu aí um certo dejavu? 😁

**Exercício 4**: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para `["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]` , o retorno deve ser "Fernanda" .

🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.

**Exercício 5**: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

**Exercício 6**: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triângulo" , caso não seja possível formar um triângulo.

## Exercícios Bônus
**Exercício 1**: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

**Exercício 2**: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um triângulo retângulo com 5 asteriscos de base. Por exemplo:
```
n = 5

*
**
***
****
*****
```
**Exercício 3**: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

**Exercício 4**: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
```
  Álcool:
    - Até 20 litros, desconto de 3% por litro;
    - Acima de 20 litros, desconto de 5% por litro.
  Gasolina:
    - Até 20 litros, desconto de 4% por litro;
    - Acima de 20 litros, desconto de 6% por litro.
```
Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.
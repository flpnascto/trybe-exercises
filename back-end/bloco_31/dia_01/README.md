# Arquitetura - Princípios SOLID
## Conteúdo
Hoje vamos começar a aprender sobre os cinco princípios que abrangem o **SOLID** . 🎉
Esses princípios, ou boas práticas, ditam como seu código deve ser escrito e como ele deve ser organizado para otimizar manutenção, legibilidade e testabilidade.

**SOLID** significa o seguinte:
- **S** ingle responsibility principle ( Princípio da responsabilidade única ): uma classe deve ter apenas uma única responsabilidade;
- **O** pen/Closed principle ( Princípio aberto/fechado ): entidades de software devem ser abertas para extensão, mas fechadas para modificação;
- **L** iskov substitution principle ( Princípio de substituição de Liskov ): objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa;
- **I** nterface segregation principle ( Princípio da segregação da interface ): muitas interfaces de clientes específicas são melhores do que uma para todos os propósitos;
- **D** ependency inversion principle ( Princípio da inversão da dependência ): deve-se depender de abstrações, não de objetos concretos.
## Objetivos
- Escrever funções que tenham uma única responsabilidade no domínio do seu programa.
- Escrever classes com funções que estão abertas para extensão e fechadas para modificação.
- Injetar dependências para dar a quem chama o controle sobre como uma função faz o que precisa.
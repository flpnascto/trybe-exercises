# CSS Responsivo - Mobile First

#### Conteúdo
Utilizar *media queries* para mostrar um layout diferente em tamanhos de tela diferentes.
Exemplo:
* Layout 1 para telas grandes: *desktops, laptops, etc*;
* Layout 2 para telas médias: *tablets, telefones com tela grande (Samsung Note), etc*;
* Layout 3 para telas pequenas: *smartphones*.
*media queries* são bastante utilizadas no design responsivo para mostrar diferentes layouts para diferentes telas, dependendo do seu tamanho e/ou orientação. A principal razão para isso é que alguns layouts podem parecer "estranhos" (ou até completamente quebrados) em telas muito estreitas, ou muito largas.

#### Objetivo
* Criar regras CSS específicas para serem aplicadas a dispositivos móveis;
* Construir páginas que alteram o seu layout de acordo com a orientação da tela;

#### Exercícios

###### Parte I - Criar uma página para uma tela pequena

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o *Chrome* para isso, veja no detalhe nos **Recursos adicionais** ).
Agora você vai ajustar o *CSS* para melhorar a visualização da página.
Realize as seguintes tarefas:
* Faça o tamanho da fonte ser maior;
* Faça o tamanho da fonte dos elementos `h1` ser menor;
* Aumente o espaçamento entre as figuras;
* Adicione um pouco de margin na página.

Depois comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.
*(Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido. Ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra...)*
Realize as seguintes tarefas:
* Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px). Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
* Crie uma *media query* no seu arquivo **CSS*, usando a dimensão em pixels que você guardou como o `min-width` do teste da *media query* . Dentro desse breakpoint, adicione os seguintes ajustes:
  * Altere a cor de fundo (*isso vai te ajudar a perceber quando a media query teve efeito*);
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Faça as imagens serem mostradas em duas colunas.

Agora, você vai criar outro breakpoint para telas grandes. Redimensione sua tela de novo para encontrar um novo breakpoint.
* Crie uma nova *media query* no seu arquivo *CSS* usando a dimensão que você encontrou para telas grandes (*por exemplo 1300px*), e realize os seguintes ajustes dentro do breakpoint:
  * Altere a cor de fundo;
  * Ajuste o tamanho da fonte;
  * Ajuste as margens da página;
  * Adicione a propriedade `max-width` à página, para garantir que a largura das linhas não fique muito grande.

###### Parte II - Criando 3 layouts diferentes utilizando o mobile first

* Utilizando a abordagem *mobile first* e *media queries*, crie três versões de layout diferentes para essa página. Cada layout deve corresponder a um tamanho diferente de página (pequeno, médio e grande).
  * Faça pelo menos um commit para cada layout;
* Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:
  * Onde a lista de capítulos deve estar posicionada?
  * Como a história deve ser mostrada?
  * Como o cabeçalho deve ser posicionado?
  * O que fazer com as informações do autor em cada tamanho de tela?
* Talvez você precise alterar o *HTML* um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

###### Parte III - Criando layouts para dispositivos móveis e para impressão

O objetivo deste exercício é usar *media queries* para fazer a página acima parecer diferente na hora da impressão e em diferentes tamanhos de tela.
* Adicione uma *media query* no arquivo *CSS* e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:
  * Os elementos com `id header`, `navigation` e `footer` devem desaparecer;
  * O elemento com `id aside` deve ser mostrado abaixo do conteúdo principal.
* Adicione uma *media query* no arquivo *CSS* e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:
  * O elemento com `id aside` deve desaparecer;
  * O elemento `body` não deve ter `padding`;
  * As imagens não devem exceder a largura da tela;
  * Os itens dentro do elemento `navigation` devem aparecer cada um em sua própria linha;
  * O elemento com `id header` deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo apos o usuário rolar a página.

## Projeto Alura Geek

### Introdução
Foi desenvolvido através do Alura Challenges, que são projetos onde os alunos aplicam seus conhecimentos sem muita supervisão dos instrutores, a idéia é simular uma rotina de trabalho, utilizando ferramentas como o Trello, Notion e Figma. Os instrutores uma vez por semana apresentam as funcionalidades que devem ter no projeto e auxiliam os alunos em problemas pontuais encontrados no projeto.

A propósta era fazer um site de venda de produtos nerd e nele eu apliquei:
- HTML e CSS: Básico e avançado;
- Responsividade;
- Utilização de uma API fake;
- Validação de formulários;
- Utilização de pesquisa de produtos;
- React;
	Hooks utilizados:
	- useState e useEffect;

Também deve conter:
- Área de usuário, pós login;
	- Área para edição de produtos;
- Campo de pesquisa de produtos;
- Formulário para enviar mensagens ao administrador no rodapé;

**Dependências necessárias para rodar o projeto**
- npm install react-scripts@latest ; (funcionamento do CSS.modules)
- npm install react-icons --save ;
- npm install react-router-dom ;
- npm install json-server ;

### Projeto: Ilustrações

**Ilustração do projeto, de forma resumida:**
<div align="center">Em construção</div><br>

**Desafios**
Por incrivel que pareça, as partes mais desafiadoras para mim foi no HTML e CSS. Sempre utilizei o Flexbox para agrupar e alinhar elementos e achei que fazendo bem era possível de aplicar ele em qualquer parte do projeto, bom, esse projeto me provou que não, e eu tive que começar a utilizar outras tecnicas como Grid e Position (relative, absolute), fora outros métodos em partes específicas.

Exemplo: A imagem do Banner que foi fornecida é uma imagem quase quadrada, porém no projeto é necessário que ele tenha um formato wide que pegue a página inteira:

<div align="center">Em construção</div><br>

Ou na página de Produtos, onde foi fornecido imagens de formatos completamente diferente um do outro.

<div align="center">Em construção</div><br>

Em ambos os casos, para conseguir achar um meio termo em que todas as imagens/tamanho de tela ficassem razoavelmente boas foi bem difícil.

### Alguns problemas para serem corrigidos
Existe uma lista de bugs e funcionalidades bem grande que eu ainda não consegui arrumar. Estas funcionalidades serão corrigidas e refatoradas aos poucos conforme o tempo.

- Antes do carregamento da API na página inicial o header fica colado com o footer, eu deveria adicionar algum espaçamento entre eles ou algum icone para mostrar que a API ainda está carregando;
- As vezes acontece o erro na página Home: TypeError: NetworkError when attempting to fetch resource;
- Corrigir todos os problemas de 'Each child in a list should have a unique "key" prop';
- Arrumar o erro que está dando no ReactDOM que fala que não é mais suportado ao React 18;

  **Header**
  - Final do botão não está alinhado com o conteúdo abaixo (main);
  - Implementar interface de pesquisa para dispositivos móveis;

	**ListaProdutosPaginaInicial**
  - Adicionar um botão (funcional) para rodar os produtos, enquanto ainda está no tamanho desktop;

  **Produto**
  - Quando der F5 na página, todas as informações do produto são perdidos;

  **ListaPesquisa**
  - Os valores da pesquisa vindo de outras páginas não estão sendo carregados, são carregados apenas os valores da pŕopria página;
  - Rever a sintaxe do toLowerCase;

  **Media Query**
  - Acredito que os produtos devem ficar centralizados ao invéz de ter um espaçamento fixo de margem;
  - Corrigir tela de login, tablet, em alguns casos esta com o espaçamento de footer errado;

  **Textarea**
  - Conteúdo escrito está em cor cinza, deve ser preto;

  **Link**
  - Estou perdendo todo o CSS de hover quando é utilizado o componente Link (react-router-dom);
  - Para redirecionar, tentar utilizar outro método que não seja o window.location.href (Barra de pesquisa, Login);

  **PaginaADM**
  - Fazer com que o sistema pegue o nome do Usuário logado, e coloca-lo na frase de "Seja bem vindo (nome)";

  **Input**
  - Eu simplesmente não estou conseguindo fazer um Input reaproveitavel;

Para uma visualização melhor do projeto veja no meu canal do Youtube, lá eu faço videos curtos onde eu mostro cada um deles.

<div>
  <a href="https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA" target="_blank"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/allanribeirosantos/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
</div>
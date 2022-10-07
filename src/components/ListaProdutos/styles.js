import styled from "styled-components";

export const Cardimage = styled.div`
  &:not(:last-child) {
    margin-right: 1rem;
  }

  .listaProdutos_cardimage {
    width: 176px;
    height: 174px;
  }

  & p {
    margin-top: 0.5rem;
  }

  .card_nome_produto {
    font-size: var(--tamanho_fonte14);
  }

  .card_preco_produto {
    font-weight: 700;
  }

  .card_ver_produto {
    color: var(--cor_azul);
  }

  @media screen and (max-width: 1024px) {
    .listaProdutos_cardimage {
      width: 164px;
    }
  }

  @media screen and (max-width: 768px) {
    .listaProdutos_cardimage {
      // width: 156px;
      width: 140px;
    }
  }
`;

export const CardimageTodosProdutos = styled.div`
  position: relative;

  .cardtodosprodutos_listaProdutos_cardimage {
    width: 176px;
    height: 174px;
    background-color: blue;
  }

  .trash_icon, .pencil_icon  {
    position: absolute;
    width: 18px;
    top: 0;
    right: 0;
    color: #FFF;
  }

  .trash_icon  {
    margin-right: 53px;
    margin-top: 11px;
  }

  .pencil_icon {
    margin-right: 11px;
    margin-top: 11px;
  }

  & p {
    margin-top: 0.5rem;
  }

  .cardtodosprodutos_nome_produto {
    font-size: var(--tamanho_fonte14);
  }

  .cardtodosprodutos_preco_produto {
    font-weight: 700;
  }

  .cardtodosprodutos_ver_produto {
    color: var(--cor_azul);
  }

  @media screen and (max-width: 1024px) {
    .cardtodosprodutos_listaProdutos_cardimage {
      width: 164px;
    }
  }

  @media screen and (max-width: 768px) {
    .cardtodosprodutos_listaProdutos_cardimage {
      width: 140px;
    }
  }
`;

export const ListaProdutosPaginaInicial = styled.section`
  width: var(--largura_conteudo1);
  margin: auto;

  .main_categoria_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .main_categoria_container p {
    color: var(--cor_azul);
  }

  .section_card_container {
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .main_titulo {
    font-size: var(--tamanho_fonteh2);
  }

  &:last-child {
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 1024px) {
    .main_categoria_container {
      margin-top: 4rem;
    }

    & {
      width: var(--largura_conteudo2);
    }

    .section_card_container {
      overflow: scroll;
      overflow-y: hidden;
    }

    .main_titulo {
      font-size: var(--tamanho_fonte22);
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .section_card_container::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .section_card_container {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo3);
    }

    .main_categoria_container {
      margin-top: 1rem;
    }

    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

// Tentei colocar o mesmo modelo do ListaProdutosPaginaInicial e não funcionou, acredito que seja porque ele é valido como um componente com html dentro, e não um componente puramente de CSS
export const ListaProdutosSimilares = styled.section`
  width: var(--largura_conteudo1);
  margin: auto;

  .main_categoria_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .main_categoria_container p {
    color: var(--cor_azul);
  }

  .section_card_container {
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .main_titulo {
    font-size: var(--tamanho_fonteh2);
  }

  &:last-child {
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 1024px) {
    .main_categoria_container {
      margin-top: 4rem;
    }

    & {
      width: var(--largura_conteudo2);
    }

    .section_card_container {
      overflow: scroll;
      overflow-y: hidden;
    }

    .main_titulo {
      font-size: var(--tamanho_fonte22);
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .section_card_container::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .section_card_container {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo3);
    }

    .main_categoria_container {
      margin-top: 1rem;
    }

    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

export const ListaTodosProdutosPaginaInicial = styled.section`
  width: var(--largura_conteudo1);
  margin: auto;
  padding-bottom: 4rem;

  .todosProdutos_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 176px);
    /* Tem o mesmo efeito do flex-wrap*/
    column-gap: 1rem;
    row-gap: 4rem;
    justify-content: center;
  }

  .todosProdutos_categoria {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .todosProdutos_categoria h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    & {
      width: var(--largura_conteudo2);
    }

    .todosProdutos_container {
      grid-template-columns: repeat(auto-fill, 164px);
      row-gap: 1rem;
    }

    .todosProdutos_categoria h2 {
      font-size: var(--tamanho_fonte22);
    }

    & {
      padding-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo2);
    }

    .todosProdutos_container {
      grid-template-columns: repeat(auto-fill, 140px);
    }

    .todosProdutos_categoria {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .todosProdutos_categoria h2 {
      margin-bottom: 1rem;
    }
  }
`;
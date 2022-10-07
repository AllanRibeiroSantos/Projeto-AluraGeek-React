import styled from "styled-components";

export const AdmCard = styled.div`
  border: 1px solid var(--cor_cinza_claro);
  border-radius: 1rem;
  padding: 2rem;

  &:hover {
    background-color: var(--fundo_azul_claro);
    border: 2px solid var(--botao_azul_hover);
  }

  & h2 {
    font-size: var(--tamanho_fonte22);
  }

  & p {
    margin-top: 1rem;
  }
`;

export const PaginaADM = styled.section`
  background-color: var(--fundo_cinza);

  .adm_container {
    width: var(--largura_conteudo1);
    margin: auto;
    padding: 4rem 0;
  }

  .adm_container h2 {
    font-size: var(--tamanho_fonte22);
    text-align: center;
  }

  .adm_container h1 {
    font-size: var(--tamanho_fonteh2);
    margin: 1rem 0;
  }

  .adm_card_container {
    display: grid;
    row-gap: 2rem;
    column-gap: 1.5rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    /* Faz com que tenha o mesmo efeito do flex-wrap e tenha o minimo de 340px */
  }

  @media screen and (max-width: 1024px) {
    .adm_container {
      width: var(--largura_conteudo2);
    }

    .adm_container h2 {
      font-size: var(--tamanho_fonte16);
    }
    
    .adm_container h1 {
      font-size: var(--tamanho_fonte22);
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    .adm_container {
      width: var(--largura_conteudo3);
      padding: 1rem 0;
    }
  }
`;

export const TodosProdutosEdicao = styled.section`
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
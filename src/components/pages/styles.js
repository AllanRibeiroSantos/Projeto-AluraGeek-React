import styled from "styled-components";

export const ListaPesquisa = styled.section`
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

export const Login = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--fundo_cinza);
  height: var(--espacamento_footer);

  .login_form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 26.4375rem;
  }

  .login_form_container label {
    /* text-align: center; */
    font-size: var(--tamanho_fonte18);
  }

  .login_form_container div:not(:first-child) {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    .login_form_container {
      width: 275px;
    }

    .login_form_button {
      display: flex;
      justify-content: center;
    }
  }
`;

export const NovoProduto = styled.section`
  background-color: var(--fundo_cinza);
  padding: 4rem 0;

  .novoProduto_container {
    width: 559px;
    margin: auto;
  }

  .novoProduto_container h2 {
    font-size: 2rem;
  }

  .novoProduto_cadastro_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .novoProduto_cadastro_container p {
    margin: 0 1rem;
  }

  .novoProduto_cadastro_img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 282px;
    height: 152px;
    background-color: #FFF;
    color: var(--cor_cinza_escuro);
    border: 1px dashed #C8C8C8;
  }

  .img_icon {
    font-size: 2rem;
    color: #C8C8C8;
  }

  .novoProduto_form_container {
    display: flex;
    flex-direction: column;
  }

  .novoProduto_form_container input {
    margin-top: 1rem;
  }

  .novoProduto_form_container textarea {
    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    & {
      padding: 2rem 0;
    }

    .novoProduto_container {
      width: var(--largura_conteudo2);
      margin: auto;
    }

    .novoProduto_container h2 {
      font-size: var(--tamanho_fonte22);
    }

    .novoProduto_cadastro_container {
      width: 75%;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 1rem 0;
    }

    .novoProduto_container {
      width: var(--largura_conteudo3);
    }

    .novoProduto_cadastro_container {
      width: 100%;
    }

    .novoProduto_cadastro_img {
      width: 100%;
    }

    .novoProduto_ouText {
      display: none;
    }

    .novoProduto_cadastro_container button {
      display: none;
    }
  }
`;

export const Produto = styled.section`
  background-color: var(--fundo_cinza);

  .produto_container {
    display: flex;
    align-items: center;
    width: var(--largura_conteudo1);
    padding-top: 4rem;
    margin: auto;
  }

  .produto_container_image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    background-color: #FFF;
    border: 1px solid var(--cor_cinza_claro);
    width: 560px;
    height: 403px;
    overflow: hidden;
    flex-shrink: 1;
  }

  .produto_image {
    max-width: 560px;
    max-height: 600px;
  }

  .produto_container_descricao {
    display: flex;
    flex-direction: column;
    min-width: 440px;
    flex-shrink: 3;
  }

  .produto_container_descricao h2 {
    font-size: var(--tamanho_fonteh1);
  }

  .produto_container_descricao p {
    font-weight: 700;
    margin: 0.5rem 0;
  }

  .produto_container_descricao p:last-child {
    margin-top: 0.5rem;
    font-weight: 400;
    color: var(--cor_cinza_escuro);
  }

  @media screen and (max-width: 1024px) {
    .produto_container {
      width: var(--largura_conteudo2);
      padding-top: 2rem;
    }

    & {
      min-height: fit-content;
    }
    
    .produto_container_image {
      min-width: 254px;
      min-height: 0;
      max-height: 200px;
      width: 254px;
      max-height: 250px;
      /* height: 157px; */
    }

    .produto_image {
      max-width: 254px;
      max-height: 400px;
    }

    .produto_container_descricao {
      min-width: 0;
    }

    .produto_container_descricao h2 {
      font-size: var(--tamanho_fonte22);
    }

    .produto_container_descricao p {
      font-size: 1rem;
    }

    .produto_container_descricao p:last-child {
      font-size: var(--tamanho_fonte14);
    }
  }

  @media screen and (max-width: 768px) {
    .produto_container {
      flex-direction: column;
      width: var(--largura_conteudo3);
      padding-top: 0;
      padding-bottom: 1rem;
    }

    & {
      min-height: fit-content;
    }

    .produto_container_image {
      width: 100vw;
      margin: 0;
    }

    .produto_image {
      max-width: max-content; /* herda do media 1024*/
      max-height: max-content; /* herda do media 1024*/
      width: 100%;
    }

    .produto_container_descricao h2 {
      margin-top: 1rem;
    }
  }
`;

export const NaoEncontradoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--espacamento_footer);
  
  .naoencontrado_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--largura_conteudo1);
  }

  .big {
    font-size: 6rem;
  }

  .small {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    height: calc(100vh - 30rem);

    .naoencontrado_container {
      width: var(--largura_conteudo2);
    }
  }

  @media screen and (max-width: 768px) {
    height: calc(100vh - 35rem);

    .naoencontrado_container {
      width: var(--largura_conteudo3);
    }

    .big {
      font-size: 4.5rem;
    }

    .small {
      font-size: 1.2rem;
    }
  }
`;
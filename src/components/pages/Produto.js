import { React } from 'react';
import ListaProdutosSimilares from '../ListaProdutos/ListaProdutosSimilares';
import styled from 'styled-components';

const Produto = styled.section`
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

export default ({ idProdutoEnviado, produtosEnviados, enviaProdutos, idProdutoClicado }) => {
  // Lembrando que, da forma em que eu programei, a página SÓ IRÁ CARREGAR caso for clicado no botão Ver Produto, inclusive, caso você dê um F5, a página também não recarregará

  const produto = produtosEnviados.filter(itens => itens.id == idProdutoEnviado);

  return (
    <>
      {produto.map(produto => (
        <Produto key={produto.id}>
          <div className="produto_container">
            <div className="produto_container_image">
              <img className="produto_image" src={produto.img_large} />
            </div>
            <div className="produto_container_descricao">
              <h2>{produto.nome}</h2>
              <p>{produto.valor}</p>
              <p>{produto.descricao}</p>
            </div>
          </div>
          <ListaProdutosSimilares
            nomeCategoria='Produtos similares'
            categoriaProduto={produto.categoria}
            enviaProdutos={enviaProdutos}
            idProdutoClicado={idProdutoClicado}
          />
        </Produto>
      ))}
    </>
  )
}

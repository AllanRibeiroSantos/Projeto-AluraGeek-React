import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cardimage = styled.div`
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

export default ({ cardsrc, nome_produto, preco_produto, to, idProdutoClicado, id_key }) => {

  return (
    <Cardimage>
      <img className="listaProdutos_cardimage"
        src={cardsrc} />
      <p className="card_nome_produto">{nome_produto}</p>
      <p className="card_preco_produto" >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className="card_ver_produto"
          onClick={() => idProdutoClicado(id_key)} >
          Ver Produto
        </p>
      </Link>
    </Cardimage>
  )
}

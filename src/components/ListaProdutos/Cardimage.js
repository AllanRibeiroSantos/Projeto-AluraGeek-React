import React from 'react';
import { Link } from 'react-router-dom';
import { Cardimage } from './styles';

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

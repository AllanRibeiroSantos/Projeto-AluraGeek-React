import React from 'react';
import Cardimage from './Cardimage';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ListaProdutosSimilares } from './styles';

export default ({ nomeCategoria, categoriaProduto, idProdutoClicado, enviaProdutos }) => {

  const itensMesmaCategoria = enviaProdutos.filter(itens => itens.categoria == categoriaProduto);

  return (
    <ListaProdutosSimilares>
      <div className="main_categoria_container">
        <h2 className="main_titulo">{nomeCategoria}</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className="section_card_container">
        {itensMesmaCategoria.map(card => (
          <Cardimage
            key={card.id}
            nome_produto={card.nome}
            preco_produto={card.valor}
            to={'/produto/'+ card.id} // Redirecionamento
            cardsrc={card.imagem} //URL da imagem
            idProdutoClicado={idProdutoClicado}
            id_key={card.id}
          />
        ))}
      </div>
    </ListaProdutosSimilares>
  )
}

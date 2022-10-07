import React from 'react';
import ButtonAzul from '../../buttons/ButtonAzul';
import CardimageTodosProdutos from '../../ListaProdutos/CardimageTodosProdutos';
import { Link } from 'react-router-dom';
import { TodosProdutosEdicao } from './styles';

export default ({ enviaProdutos, idProdutoClicado }) => {
  return (
    <>
      <TodosProdutosEdicao>
        <div className="todosProdutos_categoria">
          <h2>Todos os produtos</h2>
          <Link to='/novoproduto' style={{ textDecoration: 'none' }}>
            <ButtonAzul text='Adicionar produto' />
          </Link>
        </div>
        <div className="todosProdutos_container">
          {enviaProdutos.map(card => (
            <div>
              <CardimageTodosProdutos
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to={'/produto/' + card.id} // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
                idProdutoClicado={idProdutoClicado}
                id_key={card.id}
              />
            </div>
          ))}
          {enviaProdutos.map(card => (
            <div>
              <CardimageTodosProdutos
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to={'/produto/' + card.id} // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
                idProdutoClicado={idProdutoClicado}
                id_key={card.id}
              />
            </div>
          ))}
        </div>
      </TodosProdutosEdicao>
    </>
  )
}

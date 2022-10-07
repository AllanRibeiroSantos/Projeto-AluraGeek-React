import React from 'react';
import Cardimage from './Cardimage';
import { ListaTodosProdutosPaginaInicial } from './styles';

export default ({ enviaProdutos, idProdutoClicado }) => {

  // Dados da API vindo diretamente do App

  return (
    <>
      <ListaTodosProdutosPaginaInicial>
        <div className="todosProdutos_categoria">
          <h2>Todos os produtos</h2>
        </div>
        <div className="todosProdutos_container">
          {enviaProdutos.map(card => (
            <div>
              <Cardimage
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
              <Cardimage
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
      </ListaTodosProdutosPaginaInicial>
    </>
  )
}

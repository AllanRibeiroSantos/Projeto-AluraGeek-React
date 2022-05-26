import React from 'react';
import styles from '../pages/administracao/TodosProdutos.module.css';
import Cardimage from './Cardimage';

export default function ListaTodosProdutosPaginaInicial({ enviaProdutos, idProdutoClicado }) {

  // Dados da API vindo diretamente do App

  return (
    <>
      <section className={styles.todosProdutos_section_container}>
        <div className={styles.todosProdutos_categoria}>
          <h2>Todos os produtos</h2>
        </div>
        <div className={styles.todosProdutos_container}>
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
      </section>
    </>
  )
}

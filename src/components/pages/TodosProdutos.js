import React from 'react';
import styles from './TodosProdutos.module.css';
import ButtonAzul from '../buttons/ButtonAzul';
import CardimageTodosProdutos from '../ListaProdutos/CardimageTodosProdutos';
import { Link } from 'react-router-dom';

export default function TodosProdutos({ enviaProdutos }) {

  // Dados da API vindo diretamente do App

  return (
    <>
      <section className={styles.todosProdutos_section_container}>
        <div className={styles.todosProdutos_categoria}>
          <h2>Todos os produtos</h2>
          <Link to='/novoproduto' style={{ textDecoration: 'none' }}>
            <ButtonAzul text='Adicionar produto' />
          </Link>
        </div>
        <div className={styles.todosProdutos_container}>
          {enviaProdutos.map(card => (
            <div>
              <CardimageTodosProdutos
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to='/produto' // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
              />
            </div>
          ))}
          {enviaProdutos.map(card => (
            <div>
              <CardimageTodosProdutos
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to='/produto' // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

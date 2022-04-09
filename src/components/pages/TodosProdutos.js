import React from 'react';
import styles from './TodosProdutos.module.css';
import ButtonAzul from '../buttons/ButtonAzul';
import CardimageTodosProdutos from '../ListaProdutos/CardimageTodosProdutos';

export default function TodosProdutos() {
  return (
    <>
      <section className={styles.todosProdutos_section_container}>
        <div className={styles.todosProdutos_categoria}>
          <h2>Todos os produtos</h2>
          <ButtonAzul text='Adicionar produto' />
        </div>
        <div className={styles.todosProdutos_container}>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>
          <div>
            <CardimageTodosProdutos
              nome_produto='Produto XYZ'
              preco_produto='R$ 60,00'
              to='/produto' // Redirecionamento
              cardsrc='url' //URL da imagem
            />
          </div>

        </div>
      </section>
    </>
  )
}

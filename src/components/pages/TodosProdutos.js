import React from 'react';
import styles from './TodosProdutos.module.css';
import ButtonAzul from '../buttons/ButtonAzul';
import CardimageTodosProdutos from '../ListaProdutos/CardimageTodosProdutos';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function TodosProdutos() {

  const [valorProduto, setValorProduto] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/produtos',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setValorProduto(data))
      .catch(erro => console.log(erro))
  }, [])

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
          {valorProduto.map(card => (
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
          {valorProduto.map(card => (
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

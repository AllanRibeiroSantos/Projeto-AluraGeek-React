import React from 'react';
import Cardimage from './Cardimage';
import styles from './ListaProdutosPaginaInicial.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ListaProdutosPaginaInicial({ categoriaProduto }) {

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
    <section className={styles.section_container}>
      <div className={styles.main_categoria_container}>
        <h2 className={styles.main_titulo}>{categoriaProduto}</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className={styles.section_card_container}>
        {valorProduto.map(card => (

          // Se o Card for igual a categoria, então adiciona o card

          <Cardimage
            key={card.id}
            nome_produto={card.nome}
            preco_produto={card.valor}
            to={'/produto' +'/'+ card.id} // Redirecionamento
            cardsrc={card.imagem} //URL da imagem
          />
        ))}
      </div>
    </section>
  )
}

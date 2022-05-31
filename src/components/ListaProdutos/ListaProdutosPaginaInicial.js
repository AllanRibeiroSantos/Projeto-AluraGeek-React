import React from 'react';
import Cardimage from './Cardimage';
import styles from './ListaProdutosPaginaInicial.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ButtonArrow from '../buttons/ButtonArrow';

export default function ListaProdutosPaginaInicial({ categoriaProduto, idProdutoClicado, enviaProdutos }) {
  return (
    <section className={styles.section_container}>
      <div className={styles.main_categoria_container}>
        <h2 className={styles.main_titulo}>{categoriaProduto}</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className={styles.section_card_container}>
        {enviaProdutos.map(card => (
          categoriaProduto == card.categoria &&
          <Cardimage
            key={card.id}
            nome_produto={card.nome}
            preco_produto={card.valor}
            to={'/produto/' + card.id} // Redirecionamento
            cardsrc={card.imagem} //URL da imagem
            idProdutoClicado={idProdutoClicado}
            id_key={card.id}
          />
        ))}
        {/* <ButtonArrow /> */}
      </div>
    </section>
  )
}

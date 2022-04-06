import React from 'react';
import Cardimage from './Cardimage';
import styles from './ListaProdutosPaginaInicial.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function ListaProdutosPaginaInicial({ categoriaProduto }) {
  return (
    <section className={styles.section_container}>
      <div className={styles.main_categoria_container}>
        <h2 className={styles.main_titulo}>{categoriaProduto}</h2>
        <p>Ver tudo <AiOutlineArrowRight /></p>
      </div>
      <div className={styles.section_card_container}>
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
      </div>
    </section>

  )
}

import React from 'react';
import Cardimage from './Cardimage';
import styles from './ListaProdutosPaginaInicial.module.css'

export default function ListaProdutosPaginaInicial({categoriaProduto}) {
  return (
    <section className={styles.section_container}>
      <h2 className={styles.main_titulo}>{categoriaProduto}</h2>
      <div className={styles.section_card_container}>
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
        <Cardimage />
      </div>
    </section>

  )
}

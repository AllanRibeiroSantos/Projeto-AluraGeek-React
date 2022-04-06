import React from 'react';
import styles from './Cardimage.module.css'

export default function Cardimage({ cardsrc }) {
  return (
      <div className={styles.card_container}>
        <img className={styles.listaProdutos_cardimage}
        src={cardsrc} />
        <p className={styles.card_nome_produto}>Produto XYZ</p>
        <p className={styles.card_preco_produto}>R$ 60,00</p>
        <p className={styles.card_ver_produto}>Ver Produto</p>
      </div>
  )
}

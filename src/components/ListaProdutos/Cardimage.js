import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cardimage.module.css'

export default function Cardimage({ cardsrc, nome_produto, preco_produto, to }) {
  return (
    <div className={styles.card_container}>
      <img className={styles.listaProdutos_cardimage}
        src={cardsrc} />
      <p className={styles.card_nome_produto}>{nome_produto}</p>
      <p className={styles.card_preco_produto}>{preco_produto}</p>
      <Link to={to} >
        <p className={styles.card_ver_produto}>Ver Produto</p>
      </Link>
    </div>
  )
}

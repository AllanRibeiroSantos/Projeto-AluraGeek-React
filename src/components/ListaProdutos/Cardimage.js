import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cardimage.module.css'

export default function Cardimage({ cardsrc, nome_produto, preco_produto, to, idProdutoClicado, id_key }) {

  return (
    <div className={styles.card_container}>
      <img className={styles.listaProdutos_cardimage}
        src={cardsrc} />
      <p className={styles.card_nome_produto}>{nome_produto}</p>
      <p className={styles.card_preco_produto} >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className={styles.card_ver_produto} onClick={() => idProdutoClicado(id_key)}>Ver Produto</p>
      </Link>
    </div>
  )
}

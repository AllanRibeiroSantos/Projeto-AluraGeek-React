import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardimageTodosProdutos.module.css';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

export default function CardimageTodosProdutos({ cardsrc, nome_produto, preco_produto, to }) {
  return (
    <div className={styles.cardtodosprodutos_container}>
      <img className={styles.cardtodosprodutos_listaProdutos_cardimage}
        src={cardsrc} />
      <div className={styles.trash_icon}>
        <FaTrash />
      </div>
      <div className={styles.pencil_icon}>
        <RiPencilFill />
      </div>
      <p className={styles.cardtodosprodutos_nome_produto}>{nome_produto}</p>
      <p className={styles.cardtodosprodutos_preco_produto} >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className={styles.cardtodosprodutos_ver_produto}>Ver Produto</p>
      </Link>
    </div>
  )
}

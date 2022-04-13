import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cardimage.module.css'

export default function Cardimage({ cardsrc, nome_produto, preco_produto, to }) {

function redirecionaPaginaProduto() {
  console.log('Redirecionado');
  // Se esse botão for clicado, devo pegar o id do produto e jogar essa informação na página do produto, onde será carregado apenas as informaçoes dele. Na página do produto é como se eu disesse "Olha, pega esse id e carrega as informações dele"
}

  return (
    <div className={styles.card_container}>
      <img className={styles.listaProdutos_cardimage}
        src={cardsrc} />
      <p className={styles.card_nome_produto}>{nome_produto}</p>
      <p className={styles.card_preco_produto} >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className={styles.card_ver_produto} onClick={redirecionaPaginaProduto}>Ver Produto</p>
      </Link>
    </div>
  )
}

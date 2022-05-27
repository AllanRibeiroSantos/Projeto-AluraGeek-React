import { React } from 'react';
import { Link } from 'react-router-dom';
import styles from './CardimageTodosProdutos.module.css';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';

export default function CardimageTodosProdutos({ cardsrc, nome_produto, preco_produto, to, idProdutoClicado, id_key }) {
  // O ideal é eu fazer tudo com a API localhost

  function deletaCard() {

    fetch(`http://localhost:3001/produtos/${id_key}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => console.log('Deletando card'))
      .catch(erro => console.log(erro))
  }

  return (
    <div className={styles.cardtodosprodutos_container}>
      <img className={styles.cardtodosprodutos_listaProdutos_cardimage}
        src={cardsrc} />
      <div className={styles.trash_icon}
        onClick={deletaCard} >
        <FaTrash style={{ cursor: 'pointer' }} />
      </div>
      <div className={styles.pencil_icon}>
        <Link to='/edicaoproduto'>
          <RiPencilFill style={{ textDecoration: 'none', color: 'white' }} />
        </Link>
      </div>
      <p className={styles.cardtodosprodutos_nome_produto}>{nome_produto}</p>
      <p className={styles.cardtodosprodutos_preco_produto} >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className={styles.cardtodosprodutos_ver_produto}
          onClick={() => idProdutoClicado(id_key)}>Ver Produto</p>
      </Link>
    </div>
  )
}

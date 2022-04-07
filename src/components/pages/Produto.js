import React from 'react';
import styles from './Produto.module.css';
import produto1large from '../../img/produto/produto1large.png'
import ListaProdutosPaginaInicial from '../ListaProdutos/ListaProdutosPaginaInicial';

export default function Produto() {
  return (
    <>
      <section className={styles.produto_section_container}>
        <div className={styles.produto_container}>
          <div>
            <img className={styles.produto_container_image} src={produto1large} />
          </div>
          <div className={styles.produto_container_descricao}>
            <h2>Produto XYZ</h2>
            <p>R$ 60,00</p>
            <p>Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam</p>
          </div>
        </div>
        <ListaProdutosPaginaInicial categoriaProduto='Produtos similares' />
      </section>
    </>
  )
}

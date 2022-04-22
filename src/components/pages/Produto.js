import { React } from 'react';
import styles from './Produto.module.css';
import ListaProdutosSimilares from '../ListaProdutos/ListaProdutosSimilares';

export default function Produto({ idProdutoEnviado, produtosEnviados, enviaProdutos }) {
  // Lembrando que, da forma em que eu programei, a página SÓ IRÁ CARREGAR caso for clicado no botão Ver Produto, inclusive, caso você dê um F5, a página também não recarregará
  
  const produto = produtosEnviados.filter(itens => itens.id == idProdutoEnviado);

  return (
    <>
    {produto.map(produto => (
      <section className={styles.produto_section_container} key={produto.id}>
        <div className={styles.produto_container}>
          <div className={styles.produto_container_image}>
            <img className={styles.produto_image} src={produto.img_large} />
          </div>
          <div className={styles.produto_container_descricao}>
            <h2>{produto.nome}</h2>
            <p>{produto.valor}</p>
            <p>{produto.descricao}</p>
          </div>
        </div>
        <ListaProdutosSimilares 
        nomeCategoria='Produtos similares' 
        categoriaProduto={produto.categoria}
        enviaProdutos={enviaProdutos} />
      </section>
    ))}
      
    </>
  )
}

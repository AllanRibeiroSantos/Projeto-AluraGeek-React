import { React } from 'react';
import styles from './administracao/TodosProdutos.module.css';
import Cardimage from '../ListaProdutos/Cardimage';

export default function ListaPesquisa({ enviaProdutos, enviaPesquisa, idProdutoClicado }) {

  // Usar window.location.href para redirecionar para esta página faz com que a página seja recaregada e perca as informações do State, perdendo o enviaPesquisa.

  const pesquisa = enviaProdutos.filter(item => item.nome.toLowerCase().includes(enviaPesquisa.toLowerCase()))
  return (
    <>
    <section className={styles.todosProdutos_section_container}>
        <div className={styles.todosProdutos_categoria}>
          <h2>Resultados</h2>
        </div>
        <div className={styles.todosProdutos_container}>
          {pesquisa.map(card => (
            <div>
              <Cardimage
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to='/produto' // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
                id_key={card.id}
                idProdutoClicado={idProdutoClicado}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

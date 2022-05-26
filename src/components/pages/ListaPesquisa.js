import { React } from 'react';
import styles from './administracao/TodosProdutos.module.css';
import Cardimage from '../ListaProdutos/Cardimage';

export default function ListaPesquisa({ enviaProdutos, enviaPesquisa }) {

  // Os valores da pesquisa que vem de outras páginas ainda não estão sendo passadas para o filter, porém pesquisas feitas dentro da página ListaPesquisa já estão funcionando. NOTA: Ainda devo tentar fazer com que os valores da pesquisa fiquem em letra minúscula.

  // O grande problema aqui foi fazer um useState aqui e no componente App, fazendo que o react re-renderizasse infinitamente.

  const pesquisa = enviaProdutos.filter(item => item.nome.startsWith(enviaPesquisa))
  // Deveria ficar: filter(item => item.nome.toLowerCase().includes(itemPesquisado.toLowerCase()))
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
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

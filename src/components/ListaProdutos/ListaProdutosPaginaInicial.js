import React from 'react';
import Cardimage from './Cardimage';
import styles from './ListaProdutosPaginaInicial.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import list1src1 from '../../img/listadeprodutos/produto1.png'
import list1src2 from '../../img/listadeprodutos/produto2.png'
import list1src3 from '../../img/listadeprodutos/produto3.png'
import list1src4 from '../../img/listadeprodutos/produto4.png'
import list1src5 from '../../img/listadeprodutos/produto5.png'
import list1src6 from '../../img/listadeprodutos/produto6.png'
import list2src1 from '../../img/listadeprodutos/lista2produto1.png'
import list2src2 from '../../img/listadeprodutos/lista2produto2.png'

export default function ListaProdutosPaginaInicial({ categoriaProduto }) {
  return (
    <section className={styles.section_container}>
      <div className={styles.main_categoria_container}>
        <h2 className={styles.main_titulo}>{categoriaProduto}</h2>
        <p>Ver tudo <AiOutlineArrowRight /></p>
      </div>

{/* Devo fazer um loop para cada categoria (.section_container) devidamente com as suas informações colocadas em um json. Fazer também um loop para cada card. O json terá as informações de categoria e cardsrc. */}

      <div className={styles.section_card_container}>
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto' // Redirecionamento
          cardsrc={list1src1} //URL da imagem
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list1src2}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list1src3}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list1src4}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list1src5}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list1src6}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list2src1}
        />
        <Cardimage
          nome_produto='Produto XYZ'
          preco_produto='R$ 60,00'
          to='/produto'
          cardsrc={list2src2}
        />
      </div>
    </section>

  )
}

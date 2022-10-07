import React from 'react';
import Cardimage from './Cardimage';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Tentei colocar o mesmo modelo do ListaProdutosPaginaInicial e não funcionou, acredito que seja porque ele é valido como um componente com html dentro, e não um componente puramente de CSS
const ListaProdutosSimilares = styled.section`
  width: var(--largura_conteudo1);
  margin: auto;

  .main_categoria_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .main_categoria_container p {
    color: var(--cor_azul);
  }

  .section_card_container {
    display: flex;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .main_titulo {
    font-size: var(--tamanho_fonteh2);
  }

  &:last-child {
    padding-bottom: 4rem;
  }

  @media screen and (max-width: 1024px) {
    .main_categoria_container {
      margin-top: 4rem;
    }

    & {
      width: var(--largura_conteudo2);
    }

    .section_card_container {
      overflow: scroll;
      overflow-y: hidden;
    }

    .main_titulo {
      font-size: var(--tamanho_fonte22);
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .section_card_container::-webkit-scrollbar {
      display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .section_card_container {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo3);
    }

    .main_categoria_container {
      margin-top: 1rem;
    }

    &:last-child {
      padding-bottom: 1rem;
    }
  }
`;

export default ({ nomeCategoria, categoriaProduto, idProdutoClicado, enviaProdutos }) => {

  const itensMesmaCategoria = enviaProdutos.filter(itens => itens.categoria == categoriaProduto);

  return (
    <ListaProdutosSimilares>
      <div className="main_categoria_container">
        <h2 className="main_titulo">{nomeCategoria}</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className="section_card_container">
        {itensMesmaCategoria.map(card => (
          <Cardimage
            key={card.id}
            nome_produto={card.nome}
            preco_produto={card.valor}
            to={'/produto/'+ card.id} // Redirecionamento
            cardsrc={card.imagem} //URL da imagem
            idProdutoClicado={idProdutoClicado}
            id_key={card.id}
          />
        ))}
      </div>
    </ListaProdutosSimilares>
  )
}

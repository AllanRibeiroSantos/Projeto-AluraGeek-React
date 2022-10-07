import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import banner from '../../img/banner_full.jpeg';
import styled from 'styled-components';

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  color: white;
  overflow: hidden;
  height: 22rem;

  .banner_image {
    width: 100%;
    position: relative;
    transform: translate(0, 30%);
  }

  .banner_descricao {
    padding: 2rem 9.5rem;
    height: auto;
    width: var(--largura_conteudo1);
    margin: 0 auto;
    position: absolute;
  }

  .banner_titulo {
    font-size: var(--tamanho_fonteh2);
  }

  .espacamento_paragr {
    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    .banner_descricao {
      width: var(--largura_conteudo2);
      padding: 2rem;
    }

    .banner_image {
      transform: translate(0, 15%);
    }
  }

  @media screen and (max-width: 768px) {
    & {
      height: 12rem;
    }

    .banner_descricao {
      width: var(--largura_conteudo3);
      padding: 1rem;
    }

    .banner_image {
      transform: translate(0, 20%);
    }

    .banner_titulo {
      font-size: var(--tamanho_fonte22);
    }
    
    .espacamento_paragr {
      margin: 1rem 0;
      font-size: var(--tamanho_fonte14);
    }
  }
`;

export default ({ titulo, descricao }) => {
  return (
    <Banner >
      <img src={banner} className="banner_image" />
      <div className="banner_descricao" >
        <h2 className="banner_titulo">{titulo}</h2>
        <p className="espacamento_paragr">{descricao}</p>
        <ButtonAzul text='Ver Consoles' />
      </div>
    </Banner>
  )
}

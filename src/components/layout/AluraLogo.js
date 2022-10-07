import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import styled from 'styled-components';

const AluraLogo = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  .header_logoName {
    color: var(--cor_azul);
    margin-left: 2px;
  }

  @media screen and (max-width: 1024px) { 
    .container_logo {
      width: 22.74px;
    }

    & p {
      font-size: var(--tamanho_fonte10);
    }
  }
`;

export default () => {
  return (
    <AluraLogo>
      <img className="container_logo"
        src={alurageeklogo}
        alt='Logo AluraGeek' />
      <p>
        <span className="header_logoName">
          Alura
        </span>
        Geek
      </p>
    </AluraLogo>
  )
}

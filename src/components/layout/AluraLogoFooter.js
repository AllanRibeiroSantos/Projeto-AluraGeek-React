import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import styled from 'styled-components';

const AluraLogoFooter = styled.div`
  display: flex;
  align-items: center;

  .footer_logoName {
    color: var(--cor_azul);
    margin-left: 2px;
  }
`;

export default () => {
  return (
    <AluraLogoFooter>
      <img className="footer_container_logo"
        src={alurageeklogo}
        alt='Logo AluraGeek'
      />
      <p><span className="footer_logoName">Alura</span>Geek</p>
    </AluraLogoFooter>
  )
}

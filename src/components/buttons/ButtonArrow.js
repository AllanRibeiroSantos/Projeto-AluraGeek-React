import React from 'react';
import styled from 'styled-components';

const ButtonArrow = styled.button`
  width: 47px;
  height: 80px;
  background-color: var(--botao_azul);
  border: none;
  border-radius: .2rem;
  position: absolute;
  top: 47px;
  right: 0;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  :hover {
    background-color: var(--botao_azul_hover);
  }

  :active {
    background-color: var(--botao_azul);
  }

  @media screen and (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;

export default () => {

  function teste() {
    console.log('Botão ainda não funcionando.')
  }

  return (
    <ButtonArrow
      onClick={teste}>
      {">"}
    </ButtonArrow>
  )
}

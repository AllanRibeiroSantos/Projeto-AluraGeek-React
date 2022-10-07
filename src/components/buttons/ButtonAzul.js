import React from 'react';
import styled from 'styled-components'

const BotaoAzul = styled.button`
  background-color: var(--botao_azul);
  color: white;
  width: 182px;
  height: 3rem;
  box-sizing: border-box;
  border: none;
  padding: 0 1rem;

  :hover {
    background-color: var(--botao_azul_hover);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    & {
      min-width: 151px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: 151px;
      height: 40px;
    }
  }
`;

export default ({text}) => {
  return (
    <BotaoAzul>{text}</BotaoAzul>
  )
}

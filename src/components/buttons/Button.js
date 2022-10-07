import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--botao_branco);
  color: var(--cor_azul);
  min-width: 182px;
  height: 3rem;
  box-sizing: border-box;
  border: 1px solid var(--cor_azul);
  padding: 0 1rem;

:hover {
  background-color: var(--botao_branco_hover);
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  & {
    min-width: 150px;
  }
}

@media screen and (max-width: 768px) {
  & {
    min-width: 120px;
    height: 40px;
  }
}
`;

export default ({ text }) => {
  return (
    <Button >{text}</Button>
  )
}

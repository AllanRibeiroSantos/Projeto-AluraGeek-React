import React from 'react';
import styled from 'styled-components';

const AdmCard = styled.div`
  border: 1px solid var(--cor_cinza_claro);
  border-radius: 1rem;
  padding: 2rem;

  &:hover {
    background-color: var(--fundo_azul_claro);
    border: 2px solid var(--botao_azul_hover);
  }

  & h2 {
    font-size: var(--tamanho_fonte22);
  }

  & p {
    margin-top: 1rem;
  }
`;

export default ({ titulo }) => {
  return (
    <>
      <AdmCard>
        <h2>{titulo}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mauris ipsum, convallis vel semper sed, pretium ut lectus. Mauris semper facilisis lectus, sed sollicitudin augue convallis id.</p>
      </AdmCard>
    </>
  )
}

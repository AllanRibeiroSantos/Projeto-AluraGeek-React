import React from 'react';
import { AdmCard } from './styles';

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

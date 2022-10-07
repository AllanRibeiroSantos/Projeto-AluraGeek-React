import React from 'react';
import { ButtonArrow } from './styles';

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

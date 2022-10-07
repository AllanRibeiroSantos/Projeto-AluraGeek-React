import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import banner from '../../img/banner_full.jpeg';
import { Banner } from './styles';

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

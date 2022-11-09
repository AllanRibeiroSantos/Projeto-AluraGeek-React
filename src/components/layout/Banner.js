import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import banner from '../../img/banner_full.jpeg';
import { BannerWrapper } from './styles';

export default function Banner ({ titulo, descricao }) {
  return (
    <BannerWrapper >
      <img src={banner} className="banner_image" />
      <div className="banner_descricao" >
        <h2 className="banner_titulo">{titulo}</h2>
        <p className="espacamento_paragr">{descricao}</p>
        <ButtonAzul text='Ver Consoles' />
      </div>
    </BannerWrapper>
  )
}

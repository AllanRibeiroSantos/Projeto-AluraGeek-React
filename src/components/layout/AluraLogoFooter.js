import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import { AluraLogoFooter } from './styles';

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

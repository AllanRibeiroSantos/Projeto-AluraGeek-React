import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import { LogoFooterWrapper } from './styles';

export default function AluraLogoFooter () {
  return (
    <LogoFooterWrapper>
      <img className="footer_container_logo"
        src={alurageeklogo}
        alt='Logo AluraGeek'
      />
      <p><span className="footer_logoName">Alura</span>Geek</p>
    </LogoFooterWrapper>
  )
}

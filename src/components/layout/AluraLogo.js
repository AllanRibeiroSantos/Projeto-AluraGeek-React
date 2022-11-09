import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import { LogoWrapper } from './styles';

export default function AluraLogoFooter () {
  return (
    <LogoWrapper>
      <img className="container_logo"
        src={alurageeklogo}
        alt='Logo AluraGeek' />
      <p>
        <span className="header_logoName">
          Alura
        </span>
        Geek
      </p>
    </LogoWrapper>
  )
}

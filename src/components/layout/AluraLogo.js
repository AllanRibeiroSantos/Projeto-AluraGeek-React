import React from 'react';
import alurageeklogo from '../../img/alurageeklogo.svg'
import { AluraLogo } from './styles';

export default () => {
  return (
    <AluraLogo>
      <img className="container_logo"
        src={alurageeklogo}
        alt='Logo AluraGeek' />
      <p>
        <span className="header_logoName">
          Alura
        </span>
        Geek
      </p>
    </AluraLogo>
  )
}

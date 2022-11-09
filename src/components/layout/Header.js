import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import AluraLogo from './AluraLogo';
import { HeaderWrapper } from './styles';

export default function Header () {
  return (
    <>
      <HeaderWrapper>
        <div className="header_logoForm">
          <Link to='/' style={{ textDecoration: 'none' }}><AluraLogo /></Link>
          <InputPesquisa />
        </div>
        <Link to='/login'><Button text='Login' /></Link>
      </HeaderWrapper>
    </>
  )
}

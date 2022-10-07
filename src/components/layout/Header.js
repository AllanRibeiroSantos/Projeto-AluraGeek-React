import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import AluraLogo from './AluraLogo';
import { Header } from './styles';

export default ({ recebePesquisa }) => {
  return (
    <>
      <Header>
        <div className="header_logoForm">
          <Link to='/' style={{ textDecoration: 'none' }}><AluraLogo /></Link>
          <InputPesquisa
            recebePesquisa={recebePesquisa}
            type='text'
            placeholder='O que deseja encontrar?' />
        </div>
        <Link to='/login'><Button text='Login' /></Link>
      </Header>
    </>
  )
}

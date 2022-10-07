import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import AluraLogo from './AluraLogo';
import { Header } from './styles';

export default ({ setEnviaPesquisa }) => {
  return (
    <>
      <Header>
        <div className="header_logoForm">
          <Link to='/' style={{ textDecoration: 'none' }}><AluraLogo /></Link>
          <InputPesquisa
            setEnviaPesquisa={setEnviaPesquisa}
            type='text'
            placeholder='O que deseja encontrar?' />
        </div>
        <Link to='/login'><Button text='Login' /></Link>
      </Header>
    </>
  )
}

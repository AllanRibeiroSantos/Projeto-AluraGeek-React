import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdmCard from './AdmCard';
import { PaginaADM } from './styles';

export default () => {
  const location = useLocation();
  const nomeUsuario = location.state;

  return (
    <>
      <PaginaADM>
        <div className="adm_container">
          <h2>Seja bem vindo, { nomeUsuario }</h2>
          <h1>Administração</h1>
          <div className="adm_card_container">
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Sua conta' />
            </Link>
            <Link to='/todosprodutosedicao' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Área de produtos' />
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Mensagens de usuários' />
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Admin. de usuários' />
            </Link>
          </div>
        </div>
      </PaginaADM>
    </>
  )
}

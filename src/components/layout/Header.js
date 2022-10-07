import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../buttons/Button';
import InputPesquisa from '../form/InputPesquisa';
import AluraLogo from './AluraLogo';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  margin: auto;
  width: var(--largura_conteudo1);
  font-size: var(--tamanho_fonte18);

  .header_logoForm {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    & {
      width: var(--largura_conteudo2);
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo3);
    }
  }
`;

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

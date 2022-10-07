import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AdmCard from './AdmCard';

const PaginaADM = styled.section`
  background-color: var(--fundo_cinza);

  .adm_container {
    width: var(--largura_conteudo1);
    margin: auto;
    padding: 4rem 0;
  }

  .adm_container h2 {
    font-size: var(--tamanho_fonte22);
    text-align: center;
  }

  .adm_container h1 {
    font-size: var(--tamanho_fonteh2);
    margin: 1rem 0;
  }

  .adm_card_container {
    display: grid;
    row-gap: 2rem;
    column-gap: 1.5rem;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    /* Faz com que tenha o mesmo efeito do flex-wrap e tenha o minimo de 340px */
  }

  @media screen and (max-width: 1024px) {
    .adm_container {
      width: var(--largura_conteudo2);
    }

    .adm_container h2 {
      font-size: var(--tamanho_fonte16);
    }
    
    .adm_container h1 {
      font-size: var(--tamanho_fonte22);
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    .adm_container {
      width: var(--largura_conteudo3);
      padding: 1rem 0;
    }
  }
`;

export default ({ enviaNomeLogin }) => {

  // Não estou conseguindo receber o enviaNomeLogin (talvez por ser assincrono)
  const nomeUsuario = 'Nome do Administrador';

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

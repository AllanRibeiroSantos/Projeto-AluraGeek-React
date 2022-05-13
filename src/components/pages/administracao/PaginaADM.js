import React from 'react';
import { Link } from 'react-router-dom';
import AdmCard from './AdmCard';
import styles from './PaginaADM.module.css'

export default function PaginaADM() {

  const nomeUsuario = 'Fulano de Tal';

  return (
    <>
      <section className={styles.adm_section_container}>
        <div className={styles.adm_container}>
          <h2>Seja bem vindo, { nomeUsuario }</h2>
          <h1>Administração</h1>
          <div className={styles.adm_card_container}>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Sua conta' />
            </Link>
            <Link to='/todosprodutos' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Área de produtos' />
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Mensagens de usuários' />
            </Link>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }} >
              <AdmCard titulo='Administração de contas de usuários' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

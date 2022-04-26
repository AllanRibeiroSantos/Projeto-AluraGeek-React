import React from 'react';
import styles from './InputPesquisa.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function InputPesquisa({ placeholder, name }) {

  function enviaPesquisa(event) {
    event.preventDefault();
    const palavra = event.target.value;
    // window.location.href = '/listaPesquisa'
    console.log(document.querySelector('.InputPesquisa_form_inputPesquisa__tPHxF'))
  }

// Tá dificil de dar um onSubmit (no <form>), devo tentar fazer por outro meio

  return (
    <>
        <input className={styles.form_inputPesquisa}
          type='search'
          name={name} id={name}
          placeholder={placeholder}
        />
        <span className={styles.lupa_icon}><BiSearchAlt2 /></span>
    </>
  )
}

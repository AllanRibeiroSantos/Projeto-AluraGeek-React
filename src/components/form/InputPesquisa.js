import React from 'react';
import styles from './InputPesquisa.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function InputPesquisa({ placeholder, name, recebePesquisa }) {
  return (
    <>
      <input className={styles.form_inputPesquisa} onKeyUp={recebePesquisa}
        data-form_inputpesquisa
        type='search'
        name={name} id={name}
        placeholder={placeholder}
      />
      <span className={styles.lupa_icon}><BiSearchAlt2 /></span>
    </>
  )
}

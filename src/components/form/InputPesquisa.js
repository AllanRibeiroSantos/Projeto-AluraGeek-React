import React from 'react';
import styles from './InputPesquisa.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function InputPesquisa({ placeholder, name }) {
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

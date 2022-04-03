import React from 'react';
import styles from './InputPesquisa.module.css';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function InputPesquisa({ placeholder, type, name }) {
  return (
    <>
      <input type='search' className={styles.form_inputPesquisa} type={type} name={name} id={name} placeholder={placeholder} />
      <span className={styles.lupa_icon}><BiSearchAlt2 /></span>
    </>

  )
}

import React from 'react';
import styles from './InputPesquisa.module.css';

export default function InputPesquisa({ placeholder, type, name }) {
  return (
    <input className={styles.form_inputPesquisa} type={type} name={name} id={name} placeholder={placeholder}/>
  )
}

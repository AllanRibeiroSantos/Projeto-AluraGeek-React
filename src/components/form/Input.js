import React from 'react';
import styles from './Input.module.css';

export default function Input({ placeholder, type, name }) {
  return (
    <input className={styles.form_input} type={type} name={name} id={name} placeholder={placeholder}/>
  )
}

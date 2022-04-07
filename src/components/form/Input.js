import React from 'react';
import styles from './Input.module.css';

export default function Input({ type, name, labeltext, placeholder }) {
  return (
    <fieldset className={styles.form_container}>
      <input className={styles.form_input}
        type={type} 
        name={name}
        id={name}
        placeholder={placeholder} />
    </fieldset>
  )
}

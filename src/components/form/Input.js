import React from 'react';
import styles from './Input.module.css';

export default function Input({ type, name, placeholder, setValorInput }) {
  return (
    <fieldset className={styles.form_container}>
      <input className={styles.form_input}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInput(evento.target.value)}
      />
    </fieldset>
  )
}

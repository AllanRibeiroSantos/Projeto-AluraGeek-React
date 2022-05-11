import React from 'react';
import styles from './Input.module.css';

export default function Input({ type, name, placeholder, setValorInput, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <fieldset className={styles.form_container}>
      {enviaMensagemAlerta &&
        <p className={styles.form_alerta}>{mensagemAlerta}</p>
      }
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

import React from 'react';
import styles from './Input.module.css';

export default function InputEmail({ name, placeholder, setValorInputEmail, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <fieldset className={styles.form_container}>
      {enviaMensagemAlerta &&
        <p className={styles.form_alerta}>{mensagemAlerta}</p>
      }
      <input className={styles.form_input}
        type='email'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputEmail(evento.target.value)}
      />
    </fieldset>
  )
}

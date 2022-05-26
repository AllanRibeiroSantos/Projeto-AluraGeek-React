import React from 'react';
import styles from './Input.module.css';

export default function InputFaleConosco({ type, name, placeholder, setValorInputFaleConosco, enviaMensagemAlerta, mensagemAlerta }) {
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
        onChange={evento => setValorInputFaleConosco(evento.target.value)}
      />
    </fieldset>
  )
}

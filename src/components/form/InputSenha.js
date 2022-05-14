import React from 'react';
import styles from './Input.module.css';

export default function InputSenha({ name, placeholder, setValorInputSenha, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <fieldset className={styles.form_container}>
      {enviaMensagemAlerta &&
        <p className={styles.form_alerta}>{mensagemAlerta}</p>
      }
      <input className={styles.form_input}
        type='password'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputSenha(evento.target.value)}
      />
    </fieldset>
  )
}

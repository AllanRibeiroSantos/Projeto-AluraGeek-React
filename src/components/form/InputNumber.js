import React from 'react';
import styles from './Input.module.css';

export default function InputNumber({ name, placeholder, setValorInputNumber, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <fieldset className={styles.form_container}>
      {enviaMensagemAlerta &&
        <p className={styles.form_alerta}>{mensagemAlerta}</p>
      }
      <input className={styles.form_input}
        type='number'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputNumber(evento.target.value)}
      />
    </fieldset>
  )
}

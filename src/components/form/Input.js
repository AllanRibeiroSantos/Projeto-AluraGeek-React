import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import styles from './Input.module.css';

export default function Input() {
  return (
    <fieldset className={styles.form_container}>
      <label className={styles.form_label}>Nome</label>
      <input type='text' placeholder='Nome' className={styles.form_input} />
      <textarea placeholder='Escreva sua mensagem' />
    </fieldset>
  )
}

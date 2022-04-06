import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.login_main_container}>
      <form className={styles.login_form_container}>
        <label>Iniciar Sessão</label>
        <div>
          <Input type='email' placeholder='Escreva seu Email' />
        </div>
        <div>
          <Input type='password' placeholder='Escreva sua Senha' />
        </div>
        <div className={styles.login_form_button}>
          <ButtonAzul text='Entrar' />
        </div>
      </form>
    </div>
  )
}

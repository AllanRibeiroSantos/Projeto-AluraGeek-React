import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import InputEmail from '../form/InputEmail';
import InputSenha from '../form/InputSenha';
import styles from './Login.module.css'

export default function Login({ enviaLogin, valorInputEmail, setValorInputEmail, valorInputSenha, setValorInputSenha }) {

  // Email e senha para teste: Email: email@algo.com.br, Senha: 123456

  function onSubmitLogin(evento) {
    evento.preventDefault();

    const loginFiltrado = enviaLogin.filter(lista => lista.email.includes(valorInputEmail));
    if (loginFiltrado <= 0) {
      console.log('Login não encontrado')
    }

    loginFiltrado.map(login => {
      if (valorInputEmail == login.email && valorInputSenha == login.senha) {
        window.location.href = '/administracao'
        console.log('Login efetuado com sucesso')
      } else {
        console.log('Email ou senha errada')
      }
    })
  }

  return (
    <div className={styles.login_main_container}>
      <form className={styles.login_form_container}
        onSubmit={onSubmitLogin}
      >
        <label>Iniciar Sessão</label>
        <div>
          <InputEmail
            placeholder='Escreva seu Email'
            setValorInputEmail={setValorInputEmail} />
        </div>
        <div>
          <InputSenha
            placeholder='Escreva sua Senha'
            setValorInputSenha={setValorInputSenha}
          />
        </div>
        <div className={styles.login_form_button}>
          <ButtonAzul text='Entrar' />
        </div>
      </form>
    </div>
  )
}

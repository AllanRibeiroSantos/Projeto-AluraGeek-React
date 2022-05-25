import  { React, useState } from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import InputEmail from '../form/InputEmail';
import InputSenha from '../form/InputSenha';
import styles from './Login.module.css'

export default function Login({ enviaLogin, valorInputEmail, setValorInputEmail, valorInputSenha, setValorInputSenha, setEnviaNomeLogin }) {

  // Email e senha para teste: Email: email@algo.com.br, Senha: 123456

  const [enviaMensagemAlerta, setEnviaMensagemAlerta] = useState(false);

  function onSubmitLogin(evento) {
    evento.preventDefault();

    const loginFiltrado = enviaLogin.filter(lista => lista.email.includes(valorInputEmail));
    if (loginFiltrado <= 0) {
      console.log('Email não cadastrado');
      console.log(enviaMensagemAlerta);
      setEnviaMensagemAlerta(true);
    }

    loginFiltrado.map(login => {
      if (valorInputEmail == login.email && valorInputSenha == login.senha) {
        setEnviaMensagemAlerta(false);
        setEnviaNomeLogin(login.nome_usuario);
        window.location.href = '/administracao';
        console.log('Login efetuado com sucesso');
      } else {
        console.log('Email ou senha invalidos');
        console.log(enviaMensagemAlerta);
        setEnviaMensagemAlerta(true);
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
            setValorInputEmail={setValorInputEmail}
            enviaMensagemAlerta={enviaMensagemAlerta}
            mensagemAlerta='Email ou senha invalidos' />
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

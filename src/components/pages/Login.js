import  { React, useState } from 'react';
import styled from 'styled-components';
import ButtonAzul from '../buttons/ButtonAzul';
import InputEmail from '../form/InputEmail';
import InputSenha from '../form/InputSenha';

const Login = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--fundo_cinza);
  height: var(--espacamento_footer);

  .login_form_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 26.4375rem;
  }

  .login_form_container label {
    /* text-align: center; */
    font-size: var(--tamanho_fonte18);
  }

  .login_form_container div:not(:first-child) {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    .login_form_container {
      width: 275px;
    }

    .login_form_button {
      display: flex;
      justify-content: center;
    }
  }
`;

export default ({ enviaLogin, valorInputEmail, setValorInputEmail, valorInputSenha, setValorInputSenha, setEnviaNomeLogin }) => {

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
    <Login>
      <form className="login_form_container"
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
        <div className="login_form_button">
          <ButtonAzul text='Entrar' />
        </div>
      </form>
    </Login>
  )
}

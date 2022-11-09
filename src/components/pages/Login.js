import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input';
import MensagemAlerta from '../form/MensagemAlerta';

import ContextInput from '../../common/context/ContextInput'
import { Login } from './styles';
import backend from '../../api'

export default function PaginaLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = backend;

  const [mensagemBoolean, setMensagemBoolean] = useState(false);
  const [input, setInput] = useState({
    'text': '',
    'email': '',
    'password': '',
    'number': 0
  });

  function onSubmitLogin(event) {
    event.preventDefault();

    login.map(novoLogin => {
      if (input.email == novoLogin.email && input.password == novoLogin.senha) {
        console.log('Login efetuado com sucesso')
        setMensagemBoolean(false)
        navigate('/administracao', { state: novoLogin.usuario })
      } else {
        console.log('Email ou senha não conferem, tente novamente.')
        setMensagemBoolean(true)
        location.pathname != '/login' && setMensagemBoolean(false)
      }
    })
  }

  // Email e senha para teste: Email: email@algo.com.br, Senha: 123456
  return (
    <ContextInput.Provider value={{ input, setInput, mensagemBoolean }}>
      <Login>
        <form className="login_form_container"
          onSubmit={(event) => onSubmitLogin(event)} >
          <label>Iniciar Sessão</label>
          <div>
            <MensagemAlerta />
            <Input
              type='email'
              placeholder='Escreva seu email'
            />
          </div>
          <div>
            <Input
              type='password'
              placeholder='Escreva sua senha'
            />
          </div>
          <div className="login_form_button">
            <ButtonAzul text='Entrar' />
          </div>
        </form>
      </Login>
    </ContextInput.Provider>
  )
}

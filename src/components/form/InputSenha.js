import React from 'react';
import { InputContainer } from './Input';

export default function InputSenha({ name, placeholder, setValorInputSenha, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <InputContainer>
      {enviaMensagemAlerta &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
      <input className="form_input"
        type='password'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputSenha(evento.target.value)}
      />
    </InputContainer>
  )
}

import React from 'react';
import { InputContainer } from './Input';

export default function InputEmail({ name, placeholder, setValorInputEmail, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <InputContainer>
      {enviaMensagemAlerta &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
      <input className="form_input"
        type='email'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputEmail(evento.target.value)}
      />
    </InputContainer>
  )
}

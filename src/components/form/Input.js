import React from 'react';
import { InputContainer } from './styles';

export default function Input({ type, name, placeholder, setValorInput, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <InputContainer >
      {enviaMensagemAlerta &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
      <input className="form_input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInput(evento.target.value)}
      />
    </InputContainer>
  )
}

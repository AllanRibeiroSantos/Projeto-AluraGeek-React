import React from 'react';
import { InputContainer } from './styles';

export default function InputFaleConosco({ type, name, placeholder, setValorInputFaleConosco, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <InputContainer>
      {enviaMensagemAlerta &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
      <input className="form_input"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputFaleConosco(evento.target.value)}
      />
    </InputContainer>
  )
}

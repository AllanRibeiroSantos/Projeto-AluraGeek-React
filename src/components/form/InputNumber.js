import React from 'react';
import { InputContainer } from './Input';

export default function InputNumber({ name, placeholder, setValorInputNumber, enviaMensagemAlerta, mensagemAlerta }) {
  return (
    <InputContainer>
      {enviaMensagemAlerta &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
      <input className="form_input"
        type='number'
        name={name}
        id={name}
        placeholder={placeholder}
        data-getinput
        onChange={evento => setValorInputNumber(evento.target.value)}
      />
    </InputContainer>
  )
}

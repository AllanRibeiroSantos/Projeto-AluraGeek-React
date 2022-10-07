import React from 'react';
import styled from 'styled-components';

export const InputContainer = styled.fieldset`
    display: flex;
    flex-direction: column;

  .form_alerta {
    color: red;
    margin-bottom: 0.5rem;
  }

  .form_input {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #C8C8C8;
    height: 3.5rem;
    padding: 0.5rem 0.75rem;
  }

  .form_input::placeholder {
    color: var(--cor_cinza_claro);
    font-size: 1rem;
  }
`;

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

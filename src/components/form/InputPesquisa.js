import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';

const InputPesquisaContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .form_inputPesquisa {
    height: 2.5rem;
    border: none;
    border-radius: 1.25rem;
    width: 24.5625rem;
    background-color: var(--fundo_cinza);
    padding: 0 1rem;
    margin: 0 2rem;
    color: #A2A2A2;
  }

  .lupa_icon {
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: var(--cor_cinza_claro);
    position: absolute;
    right: 0;
    margin-right: 3rem;
  }

  @media screen and (max-width: 1024px) {
    .form_inputPesquisa {
      width: 17rem;
    }
  }

  @media screen and (max-width: 768px) {
    .lupa_icon {
      display: none;
    }

    .form_inputPesquisa {
      display: none;
      margin: 0 1rem;
    }
  }
`;

export default function InputPesquisa({ placeholder, name, recebePesquisa }) {
  return (
    <InputPesquisaContainer>
    <input className="form_inputPesquisa"
        onKeyUp={recebePesquisa}
        data-form_inputpesquisa
        type='search'
        name={name} id={name}
        placeholder={placeholder}
      />
      <span className="lupa_icon"><BiSearchAlt2 /></span>
    </InputPesquisaContainer>
  )
}

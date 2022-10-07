import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { InputPesquisaContainer } from './styles';

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

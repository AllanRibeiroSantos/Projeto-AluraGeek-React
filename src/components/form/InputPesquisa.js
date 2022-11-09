import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputPesquisaWrapper } from './styles';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function InputPesquisa() {
  const navigateSearch = useNavigate();

  function pesquisa(event) {
    event.preventDefault();
    const input = document.querySelector('.form_inputPesquisa');

    if (input.value) {      
      navigateSearch('/listapesquisa', { state: input.value });
    }
  }

  return (
    <InputPesquisaWrapper>
      <form className='form_container'
        onSubmit={(event) => pesquisa(event)}
      >
        <input className="form_inputPesquisa"
          type='text'
          placeholder='O que deseja encontrar?'
        />
        <span className="lupa_icon"><BiSearchAlt2 /></span>
      </form>
    </InputPesquisaWrapper>
  )
}

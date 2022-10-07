import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { InputPesquisaContainer } from './styles';

export default function InputPesquisa({ placeholder, name, setEnviaPesquisa }) {

  const navigateSearch = useNavigate();

  function pesquisa(event) {

    event.preventDefault();
    const palavraPesquisada = event.target.value;

    if (event.code == 'Enter' && palavraPesquisada) {
      setEnviaPesquisa(palavraPesquisada);

      if (window.location.pathname == '/listapesquisa') {
        // Executa um bloco de funções caso já estiver na página
        console.log('Estamos na pagina da lista')

      } else {
        // É redirecionado para a página de pesquisa
        navigateSearch('/listapesquisa');
      }
    }
  }

  return (
    <InputPesquisaContainer>
      <input className="form_inputPesquisa"
        onKeyUp={pesquisa}
        data-form_inputpesquisa
        type='search'
        name={name} id={name}
        placeholder={placeholder}
      />
      <span className="lupa_icon"><BiSearchAlt2 /></span>
    </InputPesquisaContainer>
  )
}

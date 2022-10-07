import styled from "styled-components";

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


export const InputPesquisaContainer = styled.div`
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
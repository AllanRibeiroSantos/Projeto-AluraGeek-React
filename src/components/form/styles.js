import styled from "styled-components";

export const InputWrapper = styled.fieldset`
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
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }

  .form_input::placeholder {
    color: var(--cor_cinza_claro);
    font-size: 1rem;
  }
`;

export const InputPesquisaWrapper = styled.div`
  .form_container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form_inputPesquisa {
    border: none;
    border-radius: 1.25rem;
    background-color: var(--fundo_cinza);
    color: black;
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
    margin: 0 2rem;
    width: 24.5625rem;
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
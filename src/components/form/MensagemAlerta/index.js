import { useContext } from "react";
import styled from "styled-components";
import ContextInput from "../../../common/context/ContextInput";

const MensagemAlertaWrapper = styled.div`
  .form_alerta {
    color: red;
    margin-bottom: 0.5rem;
  }
`;

export default function MensagemAlerta() {
  const { mensagemBoolean, input } = useContext(ContextInput);

  const mensagens = {
    'form': 'Preencha o formulário corretamente.',
    'login': 'Login ou senha inválidos.'
  }

  let mensagemAlerta = '';

  if (input.password) {
    mensagemAlerta = mensagens.login
  } else {
    mensagemAlerta = mensagens.form
  }

  return (
    <MensagemAlertaWrapper>
      {mensagemBoolean &&
        <p className="form_alerta">{mensagemAlerta}</p>
      }
    </MensagemAlertaWrapper>
  );
}
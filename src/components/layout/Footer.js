import { React, useState } from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import AluraLogoFooter from './AluraLogoFooter';
import InputFaleConosco from '../form/InputFaleConosco';
import styled from 'styled-components';

const Footer = styled.footer`
  .footer_area {
    background-color: var(--fundo_azul_claro);
    padding: 4rem 0;
  }

  .footer_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'logo quemsomos form form';
    column-gap: 1.5rem;
    width: var(--largura_conteudo1);
    margin: auto;
  }

  .footer_aluraLogoFooter {
    grid-area: logo;
  }

  .footer_quemsomos {
    grid-area: quemsomos;
  }

  .footer_form {
    grid-area: form;
  }

  .footer_area li {
    color: var(--cor_cinza_escuro);
  }

  .footer_area li:not(:first-child) {
    margin-top: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .footer_paragr {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .footer_contatos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2rem 0;
    width: var(--largura_conteudo3);
  }

  .footer_contatos p:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: .5rem;
  }

  .contatos_nome {
    font-size: 1.1rem;
    font-weight: 700;
  }

  .contatos_redes_sociais {
    display: flex;
    justify-content: space-between;
    width: 200px;
    font-size: 40px;
  }

  .social_github a {
    color: #000;
  }

  .social_linkedin a {
    color: #0A66C2;
  }

  .social_youtube a {
    color: #FF0000;
  }

  @media screen and (max-width: 1024px) {
    .footer_container {
      width: var(--largura_conteudo2);
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 
        'logo form form'
        'quemsomos form form'
        'quemsomos form form';
      grid-template-rows: 1fr 4fr;
      column-gap: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .footer_container {
      width: var(--largura_conteudo3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .footer_quemsomos {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }

    .footer_form {
      width: 100%;
    }

    .footer_area {
      background-color: var(--fundo_azul_claro);
      padding-top: 1.5rem;
      padding-bottom: 1rem;
    }

    .footer_contatos p, .contatos_nome {
      text-align: center;
    }
  }
`;

export default ({ enviaMensagens, setValorInputFaleConosco, valorInputFaleConosco }) => {

  const [valorTextArea, setValorTextArea] = useState('');
  const [mensagemAlerta, setMensagemAlerta] = useState(false);

  function pegaInput(evento) {
    evento.preventDefault();

    if (valorInputFaleConosco && valorTextArea) {
      // Todas as letras acentuadas ou não; não pode numeros; e deve ter mais que 3 caracteres.
      const objRegexInput = /^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]{3,}$/gi;
      const inputMatch = objRegexInput.test(valorInputFaleConosco);

      // Minimo de 10 caracteres quaisquer.
      const objRegexTextArea = /^.{10,}$/gi;
      const textAreaMatch = objRegexTextArea.test(valorTextArea);

      // Caso não passe na validação, envia mensagem de erro
      if (!inputMatch || !textAreaMatch) {
        console.log('Mensagem de erro enviada')
        return setMensagemAlerta(true);
      }

      if (inputMatch && textAreaMatch) {
        setMensagemAlerta(false);

        // Fazer com que a primeira letra sempre fique maiúscula
        // Por algum motivo o join não está funcionando (diz que não é uma função)
        // let valorLower = valorInputFaleConosco.toLowerCase();
        // valorLower.split(" ");
        // valorLower[0].toUpperCase();
        // valorLower.join(" ")

        // Solução fácil para o id, porém se a mensagem que for deletada não for a última irá dar conflito de id
        // Para funcionar certo talvez eu tenha que colocar esta linha em um State;
        const ultimoId = enviaMensagens.length + 1;

        // Envia mensagens para a API
        fetch('http://localhost:3001/mensagens',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "id": ultimoId,
              "nome": valorInputFaleConosco,
              "mensagem": valorTextArea
            })
          })
          .then(() => console.log('Mensagem enviada com sucesso'))
          .catch(erro => console.log(erro))
      }
    }
  }

  return (
    <Footer>
      <div className="footer_area">
        <div className="footer_container">
          <div className="footer_aluraLogoFooter">
            <AluraLogoFooter />
          </div>
          <ul className="footer_quemsomos">
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
          <form className="footer_form"
            onSubmit={pegaInput}
          >
            <p className="footer_paragr">Fale conosco</p>
            <InputFaleConosco
              type='text'
              placeholder='Nome'
              setValorInputFaleConosco={setValorInputFaleConosco}
              enviaMensagemAlerta={mensagemAlerta}
              mensagemAlerta='Verifique se os campos atingem os requisitos' />
            <textarea
              placeholder='Escreva sua mensagem'
              onChange={evento => setValorTextArea(evento.target.value)}
            />
            <ButtonAzul text='Enviar mensagem' />
          </form>
        </div>
      </div>
      <div className="footer_contatos">
        <p>Desenvolvido por <span className="contatos_nome">Allan Ribeiro Santos</span> 2022</p>
        <p>Meus contatos:</p>
        <p className="contatos_redes_sociais">
          <span className="social_github">
            <a href='https://github.com/AllanRibeiroSantos' alt='Media social Github'>
              <BsGithub />
            </a>
          </span>
          <span className="social_linkedin">
            <a href='https://www.linkedin.com/in/allanribeirosantos/' alt='Media social Linkedin'>
              <BsLinkedin />
            </a>
          </span>
          <span className="social_youtube">
            <a href='https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA' alt='Media social Youtube'>
              <BsYoutube />
            </a>
          </span>
        </p>
      </div>
    </Footer>
  )
}

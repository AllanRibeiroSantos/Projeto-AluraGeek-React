import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

import ButtonAzul from '../buttons/ButtonAzul';
import AluraLogoFooter from './AluraLogoFooter';
import Input from '../form/Input';
import MensagemAlerta from '../form/MensagemAlerta';

import ContextInput from '../../common/context/ContextInput';
import { FooterWrapper } from './styles';
import backend from '../../api';
import { v4 as uuidv4 } from 'uuid';

export default function Footer() {
  const { mensagens } = backend;
  const location = useLocation();
  
  const [mensagemBoolean, setMensagemBoolean] = useState(false);
  const [inputTextArea, setInputTextArea] = useState('');
  const [input, setInput] = useState({
    'text': '',
    'email': '',
    'password': '',
    'number': 0
  });

  function onSubmit(event) {
    event.preventDefault();
    if (input.text && inputTextArea) {
      setMensagemBoolean(false)
      mensagens.push({
        ...mensagens,
        'id': uuidv4(),
        'nome': input.text,
        'mensagem': inputTextArea,
      })
    } else {
      console.log('Preencha o formulário corretamente.')
      setMensagemBoolean(true)
    }
  }
  useEffect(()=> setMensagemBoolean(false), [location])

  return (
    <ContextInput.Provider value={{ input, setInput, mensagemBoolean }}>
      <FooterWrapper>
        <div className="footer_area">
          <div className="footer_container">
            <div className="footer_aluraLogoFooter">
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><AluraLogoFooter /></Link>
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
              onSubmit={(event) => onSubmit(event)} >
              <p className="footer_paragr">Fale conosco</p>
              <MensagemAlerta />
              <Input
                type='text'
                placeholder='Nome'
                mensagemAlerta='Verifique se os campos atingem os requisitos' />
              <textarea
                placeholder='Escreva sua mensagem'
                onChange={event => setInputTextArea(event.target.value)}
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
      </FooterWrapper>
    </ContextInput.Provider>
  )
}

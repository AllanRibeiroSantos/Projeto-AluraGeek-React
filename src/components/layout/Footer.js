import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input';
import AluraLogo from './AluraLogo';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_area}>
        <div className={styles.footer_container}>
          <div>
            <AluraLogo />
          </div>
          <ul>
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
          <form>
            <p className={styles.footer_paragr}>Fale conosco</p>
            <Input type='text' labeltext='Nome' placeholder='Nome' />
            <textarea placeholder='Escreva sua mensagem' />
            <ButtonAzul text='Enviar mensagem' />
          </form>
        </div>
      </div>
      <div className={styles.footer_contatos}>
        <p>Desenvolvido por <span className={styles.contatos_nome}>Allan Ribeiro Santos</span> 2022</p>
        <p>Meus contatos:</p>
        <p className={styles.contatos_redes_sociais}>
          <span className={styles.social_github}>
            <a href='https://github.com/AllanRibeiroSantos' alt='Media social Github'>
              <BsGithub />
            </a>
          </span>
          <span className={styles.social_linkedin}>
            <a href='https://www.linkedin.com/in/allanribeirosantos/' alt='Media social Linkedin'>
              <BsLinkedin />
            </a>
          </span>
          <span className={styles.social_youtube}>
            <a href='https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA' alt='Media social Youtube'>
              <BsYoutube />
            </a>
          </span>
        </p>
      </div>
    </footer>
  )
}

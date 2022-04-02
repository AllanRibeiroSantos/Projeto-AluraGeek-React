import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input';
import AluraLogo from './AluraLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer_area}>
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
        <Input />
        <ButtonAzul text='Enviar mensagem' />
      </form>
      </div>
    </footer>
  )
}

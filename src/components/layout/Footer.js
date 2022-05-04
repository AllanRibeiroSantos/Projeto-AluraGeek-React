import React from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import AluraLogoFooter from './AluraLogoFooter';

export default function Footer({ enviaMensagens }) {

  /*
  
  Depois do submit deve verificar se: 
   
  - O nome tem pelo menos 4 letras, não pode conter números;
  - Se o texto tem ao menos 10 caracteres;

  Depois dessa verificação, as informações serão guardadas em um .json que serão apresentadas na página de mensagens

  */

  function pegaInput(evento) {
    evento.preventDefault();
    const valorInput = document.querySelector('[data-getinput]').value;
    const valorTextArea = document.querySelector('[data-gettextarea]').value;

    // Solução fácil para o id, porém se a mensagem que for deletada não for a última irá dar conflito de id
    const ultimoId = enviaMensagens.length + 1;

    // Envia mensagens para a API
    fetch('http://localhost:3001/mensagens',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id" : ultimoId,
          "nome": valorInput,
          "mensagem": valorTextArea
        })
      })
      .then(() => console.log('Mensagem enviada com sucesso'))
      .catch(erro => console.log(erro))
  }

  return (
    <footer>
      <div className={styles.footer_area}>
        <div className={styles.footer_container}>
          <div className={styles.footer_aluraLogoFooter}>
            <AluraLogoFooter />
          </div>
          <ul className={styles.footer_quemsomos}>
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
          <form className={styles.footer_form} onSubmit={pegaInput}>
            <p className={styles.footer_paragr}>Fale conosco</p>
            <Input type='text' placeholder='Nome' />
            <textarea placeholder='Escreva sua mensagem' data-gettextarea />
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

import { React, useState } from 'react';
import ButtonAzul from '../buttons/ButtonAzul';
import Input from '../form/Input';
import styles from './Footer.module.css';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import AluraLogoFooter from './AluraLogoFooter';
import InputFaleConosco from '../form/InputFaleConosco';

export default function Footer({ enviaMensagens, setValorInputFaleConosco, valorInputFaleConosco }) {

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

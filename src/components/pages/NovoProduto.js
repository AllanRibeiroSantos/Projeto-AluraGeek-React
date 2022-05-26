import { React, useState } from 'react';
import Button from '../buttons/Button';
import Input from '../form/Input'
import styles from './NovoProduto.module.css'
import { IoMdImage } from 'react-icons/io';
import ButtonAzul from '../buttons/ButtonAzul';
import InputNumber from '../form/InputNumber';

export default function NovoProduto({ setValorInputNumber, valorInputNumber, setValorInput, valorInput, enviaProdutos }) {

  const [valorTextArea, setValorTextArea] = useState('');

  function submitProduto(evento) {
    evento.preventDefault();

    // Todas as letras acentuadas ou não; não pode numeros; e deve ter mais que 3 caracteres.
    const objRegexInput = /^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]{3,}$/gi;
    const inputMatch = objRegexInput.test(valorInput);

    // Minimo de 10 caracteres quaisquer.
    const objRegexTextArea = /^.{10,}$/gi;
    const textAreaMatch = objRegexTextArea.test(valorTextArea);

    if (inputMatch && textAreaMatch && valorInputNumber) {

      // Observação: O "enviaProduto" vem da Fake API (my-json-server.typicode.com), porém as informações estão sendo armazenadas no localhost. Para que tudo ocorra normalmente, o envio e armazenamento das informações devem vir exatamente do mesmo lugar.
      const ultimoId = enviaProdutos.length +1;
      const valorProduto = `R$ ${valorInputNumber},00`;

      fetch('http://localhost:3001/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": ultimoId,
        "nome": valorInput,
        "valor": valorProduto,
        "imagem": "link da imagem",
        "img_large": "link da imagem larga",
        "categoria": "Adicionar uma categoria",
        "descricao": valorTextArea
      })
    })
    .then(() => console.log('Novo produto adicionado com sucesso'))
    .catch(erro => console.log(erro))
    } else {
      console.log('Preencha corretamente o cadastro do produto')
    }
  }

  return (
    <section className={styles.section_novoProduto}>
      <div className={styles.novoProduto_container}>
        <h2>Adicionar novo produto</h2>
        <div className={styles.novoProduto_cadastro_container}>
          <div className={styles.novoProduto_cadastro_img}>
            <div className={styles.img_icon}>
              <IoMdImage />
            </div>
            <p>Arraste para adicionar uma imagem para o produto</p>
          </div>
          <p className={styles.novoProduto_ouText}>Ou</p>
          <Button text='Procure no seu computador' />
        </div>
        <form className={styles.novoProduto_form_container}
          onSubmit={submitProduto}
        >
          <Input type='text'
            placeholder='Nome do produto'
            setValorInput={setValorInput} />
          <InputNumber
            placeholder='Preço do produto'
            setValorInputNumber={setValorInputNumber} />
          <textarea
            placeholder='Descrição do produto'
            onChange={evento => setValorTextArea(evento.target.value)} />
          <ButtonAzul text='Adicionar produto' />
        </form>
      </div>
    </section>
  )
}

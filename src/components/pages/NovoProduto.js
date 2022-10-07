import { React, useState } from 'react';
import Button from '../buttons/Button';
import Input from '../form/Input'
import { IoMdImage } from 'react-icons/io';
import ButtonAzul from '../buttons/ButtonAzul';
import InputNumber from '../form/InputNumber';
import styled from 'styled-components';

const NovoProduto = styled.section`
  background-color: var(--fundo_cinza);
  padding: 4rem 0;

  .novoProduto_container {
    width: 559px;
    margin: auto;
  }

  .novoProduto_container h2 {
    font-size: 2rem;
  }

  .novoProduto_cadastro_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }

  .novoProduto_cadastro_container p {
    margin: 0 1rem;
  }

  .novoProduto_cadastro_img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 282px;
    height: 152px;
    background-color: #FFF;
    color: var(--cor_cinza_escuro);
    border: 1px dashed #C8C8C8;
  }

  .img_icon {
    font-size: 2rem;
    color: #C8C8C8;
  }

  .novoProduto_form_container {
    display: flex;
    flex-direction: column;
  }

  .novoProduto_form_container input {
    margin-top: 1rem;
  }

  .novoProduto_form_container textarea {
    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    & {
      padding: 2rem 0;
    }

    .novoProduto_container {
      width: var(--largura_conteudo2);
      margin: auto;
    }

    .novoProduto_container h2 {
      font-size: var(--tamanho_fonte22);
    }

    .novoProduto_cadastro_container {
      width: 75%;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 1rem 0;
    }

    .novoProduto_container {
      width: var(--largura_conteudo3);
    }

    .novoProduto_cadastro_container {
      width: 100%;
    }

    .novoProduto_cadastro_img {
      width: 100%;
    }

    .novoProduto_ouText {
      display: none;
    }

    .novoProduto_cadastro_container button {
      display: none;
    }
  }
`;

export default ({ setValorInputNumber, valorInputNumber, setValorInput, valorInput, enviaProdutos }) => {

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
      // Para funcionar certo talvez eu tenha que colocar esta linha em um State;
      const ultimoId = enviaProdutos.length + 1;
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
    <NovoProduto>
      <div className="novoProduto_container">
        <h2>Adicionar novo produto</h2>
        <div className="novoProduto_cadastro_container">
          <div className="novoProduto_cadastro_img">
            <div className="img_icon">
              <IoMdImage />
            </div>
            <p>Arraste para adicionar uma imagem para o produto</p>
          </div>
          <p className="novoProduto_ouText">Ou</p>
          <Button text='Procure no seu computador' />
        </div>
        <form className="novoProduto_form_container"
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
    </NovoProduto>
  )
}

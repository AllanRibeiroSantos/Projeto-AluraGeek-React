import { React, useState } from 'react';
import { IoMdImage } from 'react-icons/io';

import Button from '../buttons/Button';
import Input from '../form/Input'
import ButtonAzul from '../buttons/ButtonAzul';
import ContextInput from '../../common/context/ContextInput';
import MensagemAlerta from '../form/MensagemAlerta';

import backend from '../../api';
import { v4 as uuidv4 } from 'uuid';
import { NovoProduto } from './styles';

export default function PaginaNovoProduto() {
  const { produtos } = backend;
  const [mensagemBoolean, setMensagemBoolean] = useState(false);
  const [inputTextArea, setInputTextArea] = useState('');
  const [input, setInput] = useState({
    'text': '',
    'email': '',
    'password': '',
    'number': 0
  });

  function submitProduto(event) {
    event.preventDefault();
    if(input.text && input.number && inputTextArea) {
      const inputNumber = `R$ ${input.number},00`;
      setMensagemBoolean(false);

      produtos.push({
          'id': uuidv4(),
          'nome': input.text,
          'valor': inputNumber,
          'descricao': inputTextArea
        })
        console.log('Cadastro feito com sucesso.')
    }else{
      console.log('Não foi possível cadastrar o produto. Confira se todos os campos foram preenchidos.')
      setMensagemBoolean(true)
      location.pathname != '/novoproduto' && setMensagemBoolean(false)
    }
  }

  return (
    <ContextInput.Provider value={{ input, setInput, mensagemBoolean }} >
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
          <MensagemAlerta />
          <form className="novoProduto_form_container"
            onSubmit={submitProduto} >
            <Input
              type='text'
              placeholder='Nome do produto' />
            <Input
              type='number'
              placeholder='Preço do produto' />
            <textarea
              placeholder='Descrição do produto'
              onChange={evento => setInputTextArea(evento.target.value)} />
            <ButtonAzul text='Adicionar produto' />
          </form>
        </div>
      </NovoProduto>
    </ContextInput.Provider>
  )
}

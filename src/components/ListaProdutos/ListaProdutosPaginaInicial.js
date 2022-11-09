import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cardimage from './Cardimage';
import { ListaProdutosPaginaInicial } from './styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import backend from '../../api.js';
import { v4 as uuidv4 } from 'uuid';

export default ({ categoriaProduto }) => {
  return (
    <ListaProdutosPaginaInicial>
      <div className="main_categoria_container">
        <h2 className="main_titulo">{categoriaProduto}</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className="section_card_container">
        {backend.produtos.map(produto => (
          categoriaProduto == produto.categoria &&
          <Cardimage
            key={uuidv4()}
            idProduto={produto.id}
            nome={produto.nome}
            valor={produto.valor}
            imagem={produto.imagem}
            imagemLarge={produto.img_large}
            categoria={produto.categoria}
            descricao={produto.descricao}
          />
        ))}
      </div>
    </ListaProdutosPaginaInicial>
  )
}

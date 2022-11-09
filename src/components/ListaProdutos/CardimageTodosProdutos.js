import { React } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import { CardimageTodosProdutos } from './styles';

export default function EdicaoDeProdutos({ idProduto, nome, valor, imagem, imagemLarge, categoria, descricao }) {
  function deletaCard() {}
  function idProdutoClicado() {}

  return (
    <CardimageTodosProdutos>
      <img className="cardtodosprodutos_listaProdutos_cardimage"
        src={imagem} />
      <div className="trash_icon"
        onClick={deletaCard} >
        <FaTrash style={{ cursor: 'pointer' }} />
      </div>
      <div className="pencil_icon">
        <Link to='/edicaoproduto'>
          <RiPencilFill style={{ textDecoration: 'none', color: 'white' }} />
        </Link>
      </div>
      <p className="cardtodosprodutos_nome_produto">{nome}</p>
      <p className="cardtodosprodutos_preco_produto" >{valor}</p>
      <Link to='/' style={{ textDecoration: 'none' }} >
        <p className="cardtodosprodutos_ver_produto"
          onClick={() => idProdutoClicado(id_key)}>Ver Produto</p>
      </Link>
    </CardimageTodosProdutos>
  )
}

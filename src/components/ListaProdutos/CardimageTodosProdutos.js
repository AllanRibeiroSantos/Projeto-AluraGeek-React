import { React } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';

const CardimageTodosProdutos = styled.div`
  position: relative;

  .cardtodosprodutos_listaProdutos_cardimage {
    width: 176px;
    height: 174px;
    background-color: blue;
  }

  .trash_icon, .pencil_icon  {
    position: absolute;
    width: 18px;
    top: 0;
    right: 0;
    color: #FFF;
  }

  .trash_icon  {
    margin-right: 53px;
    margin-top: 11px;
  }

  .pencil_icon {
    margin-right: 11px;
    margin-top: 11px;
  }

  & p {
    margin-top: 0.5rem;
  }

  .cardtodosprodutos_nome_produto {
    font-size: var(--tamanho_fonte14);
  }

  .cardtodosprodutos_preco_produto {
    font-weight: 700;
  }

  .cardtodosprodutos_ver_produto {
    color: var(--cor_azul);
  }

  @media screen and (max-width: 1024px) {
    .cardtodosprodutos_listaProdutos_cardimage {
      width: 164px;
    }
  }

  @media screen and (max-width: 768px) {
    .cardtodosprodutos_listaProdutos_cardimage {
      width: 140px;
    }
  }
`;

export default ({ cardsrc, nome_produto, preco_produto, to, idProdutoClicado, id_key }) => {
  // O ideal é eu fazer tudo com a API localhost

  function deletaCard() {

    fetch(`http://localhost:3001/produtos/${id_key}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => console.log('Deletando card'))
      .catch(erro => console.log(erro))
  }

  return (
    <CardimageTodosProdutos>
      <img className="cardtodosprodutos_listaProdutos_cardimage"
        src={cardsrc} />
      <div className="trash_icon"
        onClick={deletaCard} >
        <FaTrash style={{ cursor: 'pointer' }} />
      </div>
      <div className="pencil_icon">
        <Link to='/edicaoproduto'>
          <RiPencilFill style={{ textDecoration: 'none', color: 'white' }} />
        </Link>
      </div>
      <p className="cardtodosprodutos_nome_produto">{nome_produto}</p>
      <p className="cardtodosprodutos_preco_produto" >{preco_produto}</p>
      <Link to={to} style={{ textDecoration: 'none' }} >
        <p className="cardtodosprodutos_ver_produto"
          onClick={() => idProdutoClicado(id_key)}>Ver Produto</p>
      </Link>
    </CardimageTodosProdutos>
  )
}

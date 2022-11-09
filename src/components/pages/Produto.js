import { React } from 'react';
import { useLocation } from 'react-router-dom';
import ListaProdutosSimilares from '../ListaProdutos/ListaProdutosSimilares';
import { Produto } from './styles';

export default () => {
  const location = useLocation();
  const { 
    nome, 
    valor, 
    img_large,
    categoria, 
    descricao
  } = location.state;

  return (
    <>
      <Produto >
        <div className="produto_container">
          <div className="produto_container_image">
            <img className="produto_image" src={img_large} />
          </div>
          <div className="produto_container_descricao">
            <h2>{nome}</h2>
            <p>{valor}</p>
            <p>{descricao}</p>
          </div>
        </div>
        <ListaProdutosSimilares categoriaProduto={categoria}/>
      </Produto>
    </>
  )
}

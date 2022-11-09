import { React } from 'react';
import { useLocation } from 'react-router-dom';
import backend from '../../api';
import Cardimage from '../ListaProdutos/Cardimage';
import { ListaPesquisa } from './styles';
import { v4 as uuidv4 } from 'uuid';

export default () => {
  const location = useLocation();
  const pesquisa = location.state;
  const filtro = backend.produtos.filter(produto => produto.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  return (
    <>
      <ListaPesquisa>
        <div className="todosProdutos_categoria">
          <h2>Resultados</h2>
        </div>
        <div className="todosProdutos_container">
          {filtro.map(produto => (
            <div key={uuidv4()}>
              <Cardimage
                idProduto={produto.id}
                nome={produto.nome}
                valor={produto.valor}
                imagem={produto.imagem}
                imagemLarge={produto.img_large}
                categoria={produto.categoria}
                descricao={produto.descricao}
              />
            </div>
          ))}
        </div>
      </ListaPesquisa>
    </>
  )
}

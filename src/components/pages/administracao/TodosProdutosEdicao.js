import React from 'react';
import ButtonAzul from '../../buttons/ButtonAzul';
import CardimageTodosProdutos from '../../ListaProdutos/CardimageTodosProdutos';
import { Link } from 'react-router-dom';
import { TodosProdutosEdicao } from './styles';
import backend from '../../../api';
import { v4 as uuidv4 } from 'uuid';

export default () => {
  const { produtos } = backend;
  return (
    <>
      <TodosProdutosEdicao>
        <div className="todosProdutos_categoria">
          <h2>Todos os produtos</h2>
          <Link to='/novoproduto' style={{ textDecoration: 'none' }}>
            <ButtonAzul text='Adicionar produto' />
          </Link>
        </div>
        <div className="todosProdutos_container">
          {produtos.map(produto => (
            <div key={uuidv4()}>
              <CardimageTodosProdutos
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
          {produtos.map(produto => (
            <div key={uuidv4()}>
            <CardimageTodosProdutos
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
      </TodosProdutosEdicao>
    </>
  )
}

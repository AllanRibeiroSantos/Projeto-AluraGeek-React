import backend from '../../api';
import Cardimage from './Cardimage';
import { ListaTodosProdutosPaginaInicial } from './styles';
import { v4 as uuidv4 } from 'uuid';

export default () => {
  return (
    <>
      <ListaTodosProdutosPaginaInicial>
        <div className="todosProdutos_categoria">
          <h2>Todos os produtos</h2>
        </div>
        <div className="todosProdutos_container">
          {backend.produtos.map(produto => (
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
          {backend.produtos.map(produto => (
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
      </ListaTodosProdutosPaginaInicial>
    </>
  )
}

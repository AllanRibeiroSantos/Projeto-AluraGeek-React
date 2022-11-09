import Cardimage from './Cardimage';
import { ListaProdutosSimilares } from './styles';
import { Link } from 'react-router-dom';
import backend from '../../api';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';

function ProdutosSimilares ({ categoriaProduto }) {
  const itensMesmaCategoria = backend.produtos.filter(itens => itens.categoria == categoriaProduto);
  return (
    <ListaProdutosSimilares>
      <div className="main_categoria_container">
        <h2 className="main_titulo">Produtos similares</h2>
        <Link to='/todosprodutos' style={{ textDecoration: 'none' }} >
          <p>Ver tudo <AiOutlineArrowRight /></p>
        </Link>
      </div>

      <div className="section_card_container">
        {itensMesmaCategoria.map(produto => (
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
    </ListaProdutosSimilares>
  )
}

export default memo(ProdutosSimilares);

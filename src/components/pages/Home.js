import ListaProdutosPaginaInicial from '../ListaProdutos/ListaProdutosPaginaInicial';
import Banner from '../layout/Banner';
import backend from '../../api';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const { categorias } = backend;  
  return (
    <>
      <Banner
        titulo='Dezembro Promocional'
        descricao='Produtos selecionados com 33% de desconto' />
      {categorias.map( categoria => (
        <ListaProdutosPaginaInicial
          key={uuidv4()}
          categoriaProduto={categoria.nome}
        />
      ))}
    </>
  );
}

import React from 'react';
import ListaProdutosPaginaInicial from '../ListaProdutos/ListaProdutosPaginaInicial';
import Banner from '../layout/Banner';

export default function Home({ idProdutoClicado, enviaProdutos, enviaCategorias }) {
  return (
    <>
      <Banner
        titulo='Dezembro Promocional'
        descricao='Produtos selecionados com 33% de desconto' />
      {enviaCategorias.map(categorias => (
        <ListaProdutosPaginaInicial
          categoriaProduto={categorias.nome}
          key={categorias.id}
          idProdutoClicado={idProdutoClicado}
          enviaProdutos={enviaProdutos}
        />
      ))}
    </>
  );
}

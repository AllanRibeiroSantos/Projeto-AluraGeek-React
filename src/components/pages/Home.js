import React from 'react';
import ListaProdutosPaginaInicial from '../ListaProdutos/ListaProdutosPaginaInicial';
import Banner from '../layout/Banner';

export default function Home() {
    return (
      <>
        <Banner titulo='Dezembro Promocional' descricao='Produtos selecionados com 33% de desconto' />
        <ListaProdutosPaginaInicial categoriaProduto='Star Wars' />
        <ListaProdutosPaginaInicial categoriaProduto='Console' />
        <ListaProdutosPaginaInicial categoriaProduto='Diversos' />
      </>
    );
}

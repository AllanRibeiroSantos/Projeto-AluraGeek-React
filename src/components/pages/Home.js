import React from 'react';
import ListaProdutosPaginaInicial from '../ListaProdutos/ListaProdutosPaginaInicial';
import Banner from '../layout/Banner';
import { useEffect, useState } from 'react';

export default function Home() {

  const [valorCategoria, setValorCategoria] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/categorias',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setValorCategoria(data))
      .catch(erro => console.log(erro))
  }, [])

  return (
    <>
      <Banner
        titulo='Dezembro Promocional'
        descricao='Produtos selecionados com 33% de desconto' />
      {valorCategoria.map(categorias => (
        <ListaProdutosPaginaInicial
          categoriaProduto={categorias.nome}
          key={categorias.id}
        />
      ))}
    </>
  );
}

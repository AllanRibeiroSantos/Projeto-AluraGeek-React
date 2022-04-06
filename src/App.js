import React, { Component } from 'react';
import Header from './components/layout/Header';
import './assets/reset.css';
import './assets/base.css';
import './App.css';
import Banner from './components/layout/Banner';
import ListaProdutosPaginaInicial from './components/ListaProdutos/ListaProdutosPaginaInicial';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Banner titulo='Dezembro Promocional' descricao='Produtos selecionados com 33% de desconto' />
          <ListaProdutosPaginaInicial categoriaProduto='Star Wars' />
          <ListaProdutosPaginaInicial categoriaProduto='Console' />
          <ListaProdutosPaginaInicial categoriaProduto='Diversos' />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/layout/Header';
import './assets/reset.css';
import './assets/base.css';
import './App.css';
import Button from './components/buttons/ButtonAzul';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='banner_image' >
          <div className='banner_descricao'>
            <h2 className='banner_titulo'>Dezembro Promocional</h2>
            <p className='espacamento_paragr'>Produtos selecionados com 33% de desconto</p>
            <Button text='Ver Consoles' />
          </div>
        </div>
      </>
    );
  }
}

export default App;

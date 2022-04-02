import React, { Component } from 'react';
import Header from './components/layout/Header';
import fundo_cogumelo from './img/fundo_cogumelo.png'
import './assets/reset.css';
import './assets/base.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <img src={fundo_cogumelo} /> */}
      </>
    );
  }
}

export default App;

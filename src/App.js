import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import TodosProdutos from './components/pages/TodosProdutos';
import NovoProduto from './components/pages/NovoProduto';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route exact path='/' element={ <Home /> } />
              <Route path='/login' element={ <Login /> } />
              <Route path='/produto' element={ <Produto /> } />
              <Route path='/todosprodutos' element={ <TodosProdutos /> } />
              <Route path='/novoproduto' element={ <NovoProduto /> } />
            </Routes>
          </main>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

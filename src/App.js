import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';

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
            </Routes>
          </main>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

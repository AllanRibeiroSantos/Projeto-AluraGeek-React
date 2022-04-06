import React, { Component } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';
import './App.css';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

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
            </Routes>
          </main>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;

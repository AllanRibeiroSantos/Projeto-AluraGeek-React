import React, { Component } from 'react';
import Header from './components/layout/Header';
import './assets/reset.css';
import './assets/base.css';
import './App.css';
import Footer from './components/layout/Footer';
import Banner from './components/layout/Banner';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Banner />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

import { React } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';

// PÁGINAS
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import NovoProduto from './components/pages/NovoProduto';
import ListaPesquisa from './components/pages/ListaPesquisa';
import PaginaADM from './components/pages/administracao/PaginaADM';
import TodosProdutosEdicao from './components/pages/administracao/TodosProdutosEdicao';
import ListaTodosProdutosPaginaInicial from './components/ListaProdutos/ListaTodosProdutosPaginaInicial';
import EdicaoProduto from './components/pages/EdicaoProduto';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/produto/:id' element={<Produto />} />
            <Route path='/todosprodutos' element={<ListaTodosProdutosPaginaInicial />} />
            <Route path='/todosprodutosedicao' element={<TodosProdutosEdicao />} />
            <Route path='/novoproduto' element={<NovoProduto />} />
            <Route path='/listapesquisa' element={<ListaPesquisa />} />
            <Route path='/administracao' element={<PaginaADM />} />
            <Route path='/edicaoproduto' element={<EdicaoProduto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

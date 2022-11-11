import { lazy, React, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import LoadingComponent from './components/layout/LoadingComponent';

const Home = lazy(() => import('./components/pages/Home'));
const Produto = lazy(() => import('./components/pages/Produto'));
const NovoProduto = lazy(() => import('./components/pages/NovoProduto'));
const ListaPesquisa = lazy(() => import('./components/pages/ListaPesquisa'));
const PaginaADM = lazy(() => import('./components/pages/administracao/PaginaADM'));
const TodosProdutosEdicao = lazy(() => import('./components/pages/administracao/TodosProdutosEdicao'));
const ListaTodosProdutosPaginaInicial = lazy(() => import('./components/ListaProdutos/ListaTodosProdutosPaginaInicial'));
const EdicaoProduto = lazy(() => import('./components/pages/EdicaoProduto'));
const NaoEncontrado = lazy(() => import('./components/pages/NaoEncontrado'));

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<LoadingComponent />}>
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
              <Route path='/404' element={<NaoEncontrado />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </>
  );
}

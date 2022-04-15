import { React, useState, useEffect } from 'react';
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

function App() {

  const [cardProduto, setCardProduto] = useState([]);
  const [valorProduto, setValorProduto] = useState([]);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/produtos`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setValorProduto(data))
      .catch(erro => console.log(erro))
  }, [])

  function idProdutoClicado(id_produto) {
    setCardProduto(id_produto);
  }

  function enviaProdutos() {
    valorProduto.map(itens => {
      const produto = [
        {
          id: itens.id,
          nome: itens.nome,
          valor: itens.valor,
          imagem: itens.imagem,
          categoria: itens.categoria,
          descricao: itens.descricao
        }
      ]
    })
  }

  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route exact path='/' element={<Home idProdutoClicado={idProdutoClicado} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/produto/:id' element={<Produto idProdutoEnviado={cardProduto} />} />
            <Route path='/todosprodutos' element={<TodosProdutos />} />
            <Route path='/novoproduto' element={<NovoProduto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

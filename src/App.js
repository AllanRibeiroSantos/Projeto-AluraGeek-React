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
import ListaPesquisa from './components/pages/ListaPesquisa';

function App() {

  const [enviaProdutos, setEnviaProdutos] = useState([]);
  const [produtoClicado, setProdutoClicado] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/produtos',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setEnviaProdutos(data))
      .catch(erro => console.log(erro))
  }, [])

  // Dados (id) recebido do botão Ver Produto
  function idProdutoClicado(id_produto) {
    setProdutoClicado(id_produto);
  }

  const [enviaCategorias, setEnviaCategorias] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/categorias',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setEnviaCategorias(data))
      .catch(erro => console.log(erro))
  }, [])

  const [enviaPesquisa, setEnviaPesquisa] = useState([]);

  // Dados recebidos pelo input do campo de pesquisa do Header
  function pesquisa(event) {
    event.preventDefault();
    const palavraPesquisada = event.target.value;

    if (event.code == 'Enter' && palavraPesquisada) {
      setEnviaPesquisa(palavraPesquisada);

      if (window.location.pathname == '/listapesquisa') {
        // Executa um bloco de funções caso já estiver na página
        console.log('Estamos na pagina da lista')

      } else {
        // É redirecionado para a página de pesquisa
        window.location.href = '/listapesquisa';
      }
    }
  }

  return (
    <>

      <Router>
        <Header recebePesquisa={pesquisa} />
        <main>
          <Routes>
            <Route exact path='/' element=
              {
                <Home
                  idProdutoClicado={idProdutoClicado}
                  enviaProdutos={enviaProdutos}
                  enviaCategorias={enviaCategorias} />
              } />
            <Route path='/login' element=
              {
                <Login />
              } />
            <Route path='/produto/:id' element=
              {
                <Produto
                  idProdutoClicado={idProdutoClicado}
                  idProdutoEnviado={produtoClicado}
                  produtosEnviados={enviaProdutos}
                  enviaProdutos={enviaProdutos} />
              } />
            <Route path='/todosprodutos' element=
              {
                <TodosProdutos
                  enviaProdutos={enviaProdutos}
                  idProdutoClicado={idProdutoClicado} />
              } />
            <Route path='/novoproduto' element=
              {
                <NovoProduto />
              } />
            <Route path='/listapesquisa' element=
              {
                <ListaPesquisa
                  enviaPesquisa={enviaPesquisa}
                  enviaProdutos={enviaProdutos} />
              } />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;

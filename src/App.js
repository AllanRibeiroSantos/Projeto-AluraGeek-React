import { React, useState, useEffect } from 'react';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';
import Footer from './components/layout/Footer';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Produto from './components/pages/Produto';
import NovoProduto from './components/pages/NovoProduto';
import ListaPesquisa from './components/pages/ListaPesquisa';
import PaginaADM from './components/pages/administracao/PaginaADM';
import TodosProdutosEdicao from './components/pages/administracao/TodosProdutosEdicao';
import ListaTodosProdutosPaginaInicial from './components/ListaProdutos/ListaTodosProdutosPaginaInicial';

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

  const [enviaMensagens, setEnviaMensagens] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/mensagens',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setEnviaMensagens(data))
      .catch(erro => console.log(erro))
  }, [])

  // Envia valores do input (onde o componente foi posto)
  const [valorInput, setValorInput] = useState('');
  const [valorInputFaleConosco, setValorInputFaleConosco] = useState('');
  const [valorInputEmail, setValorInputEmail] = useState('');
  const [valorInputSenha, setValorInputSenha] = useState('');
  const [valorInputNumber, setValorInputNumber] = useState();
  const [enviaLogin, setEnviaLogin] = useState([]);
  const [enviaNomeLogin, setEnviaNomeLogin] = useState('');

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/login',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(data => setEnviaLogin(data))
      .catch(erro => console.log(erro))
  }, [])

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
                <Login
                  valorInputEmail={valorInputEmail}
                  setValorInputEmail={setValorInputEmail}
                  valorInputSenha={valorInputSenha}
                  setValorInputSenha={setValorInputSenha}
                  enviaLogin={enviaLogin}
                  setEnviaNomeLogin={setEnviaNomeLogin} />
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
                <ListaTodosProdutosPaginaInicial
                  enviaProdutos={enviaProdutos}
                  idProdutoClicado={idProdutoClicado} />
              } />
            <Route path='/todosprodutosedicao' element=
              {
                <TodosProdutosEdicao
                  enviaProdutos={enviaProdutos}
                  idProdutoClicado={idProdutoClicado} />
              } />
            <Route path='/novoproduto' element=
              {
                <NovoProduto
                  setValorInputNumber={setValorInputNumber}
                  valorInputNumber={valorInputNumber}
                  setValorInput={setValorInput}
                  valorInput={valorInput}
                  enviaProdutos={enviaProdutos} />
              } />
            <Route path='/listapesquisa' element=
              {
                <ListaPesquisa
                  enviaPesquisa={enviaPesquisa}
                  enviaProdutos={enviaProdutos} />
              } />
            <Route path='/administracao' element=
              {
                <PaginaADM
                  enviaNomeLogin={enviaNomeLogin} />
              } />
          </Routes>
        </main>
        <Footer
          enviaMensagens={enviaMensagens}
          setValorInputFaleConosco={setValorInputFaleConosco}
          valorInputFaleConosco={valorInputFaleConosco} />
      </Router>
    </>
  );
}

export default App;

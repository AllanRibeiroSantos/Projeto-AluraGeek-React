import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/reset.css';
import './assets/base.css';
import { funcaoProdutos, funcaoCategorias, funcaoMensagens, funcaoLogin } from './api';
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

  //Responsavel pela requisição do produto
  const [enviaProdutos, setEnviaProdutos] = useState([]);
  const [produtoClicado, setProdutoClicado] = useState([]);
  useEffect(() => funcaoProdutos(setEnviaProdutos), []);

  // Dados (id) recebido do botão Ver Produto
  function idProdutoClicado(id_produto) {
    setProdutoClicado(id_produto);
  }

  //Responsavel pelos requisição da categoria
  const [enviaCategorias, setEnviaCategorias] = useState([]);
  useEffect(() => funcaoCategorias(setEnviaCategorias), []);

  // Dados recebidos pelo input do campo de pesquisa do Header
  const [enviaPesquisa, setEnviaPesquisa] = useState([]);
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

  //Responsavel pelos requisição das mensagens localhost
  const [enviaMensagens, setEnviaMensagens] = useState([])
  useEffect(() => funcaoMensagens(setEnviaMensagens), []);

  // Salva o estado dos inputs do projeto
  const [valorInput, setValorInput] = useState('');
  const [valorInputFaleConosco, setValorInputFaleConosco] = useState('');
  const [valorInputEmail, setValorInputEmail] = useState('');
  const [valorInputSenha, setValorInputSenha] = useState('');
  const [valorInputNumber, setValorInputNumber] = useState();
  const [enviaLogin, setEnviaLogin] = useState([]);
  const [enviaNomeLogin, setEnviaNomeLogin] = useState('');

  useEffect(() => funcaoLogin(setEnviaLogin), [])

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
                  idProdutoClicado={idProdutoClicado}
                  enviaProdutoClicado={produtoClicado} />
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
            <Route path='/edicaoproduto' element=
              {
                <EdicaoProduto />
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

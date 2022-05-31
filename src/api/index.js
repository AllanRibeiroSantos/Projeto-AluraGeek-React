// my-json-server não está suportando a quantidade de informação e está retornando 'Insufficient Storage'

export function funcaoProdutos(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/produtos',
    {
  // fetch('http://localhost:3001/produtos',
  //   {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

export function funcaoCategorias(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/categorias',
    {
    // fetch('http://localhost:3001/categorias',
    // {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

export function funcaoMensagens(useState) {
  fetch('http://localhost:3001/mensagens',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

export function funcaoLogin(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/login',
    {
    // fetch('http://localhost:3001/login',
    // {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

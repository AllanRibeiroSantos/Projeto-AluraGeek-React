export function funcaoProdutos(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/produtos',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

export function funcaoCategorias(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/categorias',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
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
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

export function funcaoLogin(useState) {
  fetch('https://my-json-server.typicode.com/AllanRibeiroSantos/Projeto-AluraGeek-React/login',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    })
    .then(resposta => resposta.json())
    .then(data => useState(data))
    .catch(erro => console.log(erro))
}

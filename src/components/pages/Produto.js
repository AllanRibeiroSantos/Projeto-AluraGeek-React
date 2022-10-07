import { React } from 'react';
import ListaProdutosSimilares from '../ListaProdutos/ListaProdutosSimilares';
import { Produto } from './styles';

export default ({ idProdutoEnviado, produtosEnviados, enviaProdutos, idProdutoClicado }) => {
  // Lembrando que, da forma em que eu programei, a página SÓ IRÁ CARREGAR caso for clicado no botão Ver Produto, inclusive, caso você dê um F5, a página também não recarregará

  const produto = produtosEnviados.filter(itens => itens.id == idProdutoEnviado);

  return (
    <>
      {produto.map(produto => (
        <Produto key={produto.id}>
          <div className="produto_container">
            <div className="produto_container_image">
              <img className="produto_image" src={produto.img_large} />
            </div>
            <div className="produto_container_descricao">
              <h2>{produto.nome}</h2>
              <p>{produto.valor}</p>
              <p>{produto.descricao}</p>
            </div>
          </div>
          <ListaProdutosSimilares
            nomeCategoria='Produtos similares'
            categoriaProduto={produto.categoria}
            enviaProdutos={enviaProdutos}
            idProdutoClicado={idProdutoClicado}
          />
        </Produto>
      ))}
    </>
  )
}

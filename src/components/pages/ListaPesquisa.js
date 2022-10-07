import { React } from 'react';
import Cardimage from '../ListaProdutos/Cardimage';
import styled from 'styled-components';

const ListaPesquisa = styled.section`
  width: var(--largura_conteudo1);
  margin: auto;
  padding-bottom: 4rem;

  .todosProdutos_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 176px);
    /* Tem o mesmo efeito do flex-wrap*/
    column-gap: 1rem;
    row-gap: 4rem;
    justify-content: center;
  }

  .todosProdutos_categoria {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .todosProdutos_categoria h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  @media screen and (max-width: 1024px) {
    & {
      width: var(--largura_conteudo2);
    }

    .todosProdutos_container {
      grid-template-columns: repeat(auto-fill, 164px);
      row-gap: 1rem;
    }

    .todosProdutos_categoria h2 {
      font-size: var(--tamanho_fonte22);
    }

    & {
      padding-bottom: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo2);
    }

    .todosProdutos_container {
      grid-template-columns: repeat(auto-fill, 140px);
    }

    .todosProdutos_categoria {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .todosProdutos_categoria h2 {
      margin-bottom: 1rem;
    }
  }
`;

export default ({ enviaProdutos, enviaPesquisa, idProdutoClicado }) => {

  // Usar window.location.href para redirecionar para esta página faz com que a página seja recaregada e perca as informações do State, perdendo o enviaPesquisa.

  const pesquisa = enviaProdutos.filter(item => item.nome.toLowerCase().includes(enviaPesquisa.toLowerCase()))
  return (
    <>
    <ListaPesquisa>
        <div className="todosProdutos_categoria">
          <h2>Resultados</h2>
        </div>
        <div className="todosProdutos_container">
          {pesquisa.map(card => (
            <div>
              <Cardimage
                key={card.id}
                nome_produto={card.nome}
                preco_produto={card.valor}
                to='/produto' // Redirecionamento
                cardsrc={card.imagem} //URL da imagem
                id_key={card.id}
                idProdutoClicado={idProdutoClicado}
              />
            </div>
          ))}
        </div>
      </ListaPesquisa>
    </>
  )
}

import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardimageWrapper } from './styles';
import { v4 as uuidv4 } from 'uuid';

function Cardimage({ idProduto, nome, valor, imagem, imagemLarge, categoria, descricao }) {
  const navigate = useNavigate();

  function handlerOnClick(id, nome, valor, imagem, imgLarge, categoria, descricao) {
    navigate(`/produto/${id}`, {
      state: {
        "id": id,
        "nome": nome,
        "valor": valor,
        "imagem": imagem,
        "img_large": imgLarge,
        "categoria": categoria,
        "descricao": descricao
      }
    })
  }

  return (
    <>
      <CardimageWrapper key={uuidv4()}>
        <img className="listaProdutos_cardimage"
          src={imagem} />
        <p className="card_nome_produto">{nome}</p>
        <p className="card_preco_produto" >{valor}</p>
        <p className="card_ver_produto" onClick={() => handlerOnClick(idProduto, nome, valor, imagem, imagemLarge, categoria, descricao)}>
          Ver Produto
        </p>
      </CardimageWrapper >
    </>
  )
}

export default memo(Cardimage);

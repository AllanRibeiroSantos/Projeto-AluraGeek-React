import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--botao_branco);
  color: var(--cor_azul);
  min-width: 182px;
  height: 3rem;
  box-sizing: border-box;
  border: 1px solid var(--cor_azul);
  padding: 0 1rem;

:hover {
  background-color: var(--botao_branco_hover);
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  & {
    min-width: 150px;
  }
}

@media screen and (max-width: 768px) {
  & {
    min-width: 120px;
    height: 40px;
  }
}
`;

export const ButtonArrow = styled.button`
  width: 47px;
  height: 80px;
  background-color: var(--botao_azul);
  border: none;
  border-radius: .2rem;
  position: absolute;
  top: 47px;
  right: 0;
  font-size: 2rem;
  color: white;
  cursor: pointer;

  :hover {
    background-color: var(--botao_azul_hover);
  }

  :active {
    background-color: var(--botao_azul);
  }

  @media screen and (max-width: 1024px) {
    & {
      display: none;
    }
  }
`;

export const BotaoAzul = styled.button`
  background-color: var(--botao_azul);
  color: white;
  width: 182px;
  height: 3rem;
  box-sizing: border-box;
  border: none;
  padding: 0 1rem;

  :hover {
    background-color: var(--botao_azul_hover);
    cursor: pointer;
  }

  @media screen and (max-width: 1024px) {
    & {
      min-width: 151px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: 151px;
      height: 40px;
    }
  }
`;
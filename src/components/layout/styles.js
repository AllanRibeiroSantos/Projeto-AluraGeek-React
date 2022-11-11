import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #000;

  .header_logoName {
    color: var(--cor_azul);
    margin-left: 2px;
  }

  @media screen and (max-width: 1024px) { 
    .container_logo {
      width: 22.74px;
    }

    & p {
      font-size: var(--tamanho_fonte10);
    }
  }
`;

export const LogoFooterWrapper = styled.div`
  display: flex;
  align-items: center;

  .footer_logoName {
    color: var(--cor_azul);
    margin-left: 2px;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  color: white;
  overflow: hidden;
  height: 22rem;

  .banner_image {
    width: 100%;
    position: relative;
    transform: translate(0, 30%);
  }

  .banner_descricao {
    padding: 2rem 9.5rem;
    height: auto;
    width: var(--largura_conteudo1);
    margin: 0 auto;
    position: absolute;
  }

  .banner_titulo {
    font-size: var(--tamanho_fonteh2);
  }

  .espacamento_paragr {
    margin: 1rem 0;
  }

  @media screen and (max-width: 1024px) {
    .banner_descricao {
      width: var(--largura_conteudo2);
      padding: 2rem;
    }

    .banner_image {
      transform: translate(0, 15%);
    }
  }

  @media screen and (max-width: 768px) {
    & {
      height: 12rem;
    }

    .banner_descricao {
      width: var(--largura_conteudo3);
      padding: 1rem;
    }

    .banner_image {
      transform: translate(0, 20%);
    }

    .banner_titulo {
      font-size: var(--tamanho_fonte22);
    }
    
    .espacamento_paragr {
      margin: 1rem 0;
      font-size: var(--tamanho_fonte14);
    }
  }
`;

export const FooterWrapper = styled.footer`
  .footer_area {
    background-color: var(--fundo_azul_claro);
    padding: 4rem 0;
  }

  .footer_container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'logo quemsomos form form';
    column-gap: 1.5rem;
    width: var(--largura_conteudo1);
    margin: auto;
  }

  .footer_aluraLogoFooter {
    grid-area: logo;
  }

  .footer_quemsomos {
    grid-area: quemsomos;
  }

  .footer_form {
    grid-area: form;
  }

  .footer_area li {
    color: var(--cor_cinza_escuro);
  }

  .footer_area li:not(:first-child) {
    margin-top: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .footer_paragr {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .footer_contatos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 2rem 0;
    width: var(--largura_conteudo3);
  }

  .footer_contatos p:nth-child(2) {
    margin-top: 1rem;
    margin-bottom: .5rem;
  }

  .contatos_nome {
    font-size: 1.1rem;
    font-weight: 700;
  }

  .contatos_redes_sociais {
    display: flex;
    justify-content: space-between;
    width: 200px;
    font-size: 40px;
  }

  .social_github a {
    color: #000;
  }

  .social_linkedin a {
    color: #0A66C2;
  }

  .social_youtube a {
    color: #FF0000;
  }

  @media screen and (max-width: 1024px) {
    .footer_container {
      width: var(--largura_conteudo2);
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: 
        'logo form form'
        'quemsomos form form'
        'quemsomos form form';
      grid-template-rows: 1fr 4fr;
      column-gap: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .footer_container {
      width: var(--largura_conteudo3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .footer_quemsomos {
      margin-top: 1.5rem;
      margin-bottom: 2rem;
    }

    .footer_form {
      width: 100%;
    }

    .footer_area {
      background-color: var(--fundo_azul_claro);
      padding-top: 1.5rem;
      padding-bottom: 1rem;
    }

    .footer_contatos p, .contatos_nome {
      text-align: center;
    }
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  margin: auto;
  width: var(--largura_conteudo1);
  font-size: var(--tamanho_fonte18);

  .header_logoForm {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    & {
      width: var(--largura_conteudo2);
      padding: 1rem 0;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      width: var(--largura_conteudo3);
    }
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #777;

  & p {
    padding: 1rem 0 1rem 0;
  }
`;
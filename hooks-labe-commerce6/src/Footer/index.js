import React from "react";
import { Container, Bloco, BlocoCentral } from "./styles";
import Logo from "../img/logo.png";

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Bloco>
          <h3>Fale conosco</h3>
          <a href="">
            <p>Minha Conta</p>
          </a>
          <a href="">
            <p>Meus pedidos</p>
          </a>
          <a href="">
            <p>Encontre uma Loja perto de você</p>
          </a>
          <a href="">
            <p>Central de Atendimento</p>
          </a>
          <a href="">
            <p>Perguntas frequentes</p>
          </a>
          <a href="">
            <p>Institucional</p>
          </a>
        </Bloco>

        <BlocoCentral >
            <div>
            <h2>Cartão Labspace</h2>
            <h3>Peça já o seu!</h3>
            </div>
          
          <img src={Logo} alt="Logo da labspace" />
        </BlocoCentral>

        <Bloco>
          <h3>Redes Sociais</h3>

          <a href="https://pt-br.facebook.com/" target="_blank">
            <p>Facebook</p>
          </a>
          <a href="https://twitter.com/explore" target="_blank">
            <p>Twitter</p>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <p>Instagram</p>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <p>Youtube</p>
          </a>
        </Bloco>
      </Container>
    );
  }
}

export default Footer;

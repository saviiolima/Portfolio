import { HeaderContainer, Nav, Img, LinkStyle } from "./style.js";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <a href="">
          <Img src={Logo} alt="logo" />
        </a>
        <Nav>
          <LinkStyle to="/">Inicio</LinkStyle>

          <LinkStyle to="/Sobre">Sobre</LinkStyle>

          <LinkStyle to="/Projetos">Projetos</LinkStyle>
        </Nav>
      </HeaderContainer>
    </>
  );
}

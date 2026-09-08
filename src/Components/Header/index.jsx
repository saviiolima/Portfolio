import * as S from "./style";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoLink to="/">
        <img src={logo} alt="Logo" />
        <span>SL</span>.dev
      </S.LogoLink>
      <S.Nav>
        <S.NavLink to="/">Início</S.NavLink>
        <S.NavLink to="/sobre">Sobre</S.NavLink>
        <S.NavLink to="/projetos">Projetos</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
}

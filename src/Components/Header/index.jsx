import * as S from "./style";
import logoImg from "../../assets/logo.svg";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoLink to="/">
        <img
          src={logoImg}
          alt="Logo Sávio Lima"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
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

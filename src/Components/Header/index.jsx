import * as S from "./style";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoLink to="/">
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

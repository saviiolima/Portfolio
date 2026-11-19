import * as S from "./style";
import Logo from "../Logo";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.LogoLink to="/" aria-label="Sávio Lima, página inicial">
        <Logo size={34} />
        <span className="wordmark">
          <strong>Sávio Lima</strong>
          <small>Software</small>
        </span>
      </S.LogoLink>
      <S.Nav aria-label="Principal">
        <S.NavItem to="/" end>
          Início
        </S.NavItem>
        <S.NavItem to="/Sobre">Sobre</S.NavItem>
        <S.NavItem to="/Projetos">Projetos</S.NavItem>
      </S.Nav>
    </S.HeaderContainer>
  );
}

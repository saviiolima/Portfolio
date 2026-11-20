import { useLocation } from "react-router-dom";
import * as S from "./style";
import Logo from "../Logo";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;

const SECTION_IDS = NAV.map((item) => item.id);

export default function Header() {
  const { pathname } = useLocation();
  const active = useActiveSection(SECTION_IDS, pathname === "/");

  return (
    <S.HeaderContainer>
      <S.LogoLink
        to={{ pathname: "/", hash: "" }}
        aria-label="Sávio Lima, voltar ao topo"
      >
        <Logo size={34} />
        <span className="wordmark">
          <strong>Sávio Lima</strong>
          <small>Dev</small>
        </span>
      </S.LogoLink>
      <S.Nav aria-label="Seções do site">
        {NAV.map(({ id, label }) => (
          <S.NavItem
            key={id}
            to={{ pathname: "/", hash: `#${id}` }}
            data-section={id}
            className={active === id ? "active" : undefined}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </S.NavItem>
        ))}
      </S.Nav>
    </S.HeaderContainer>
  );
}

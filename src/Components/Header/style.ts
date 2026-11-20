import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  background: rgba(6, 20, 27, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-card);
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-main);

  .wordmark {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
  }

  strong {
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.3px;
  }

  small {
    font-size: 0.62rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--primary);
    margin-top: 3px;
  }

  /* Em telas estreitas o nome encostava no menu: fica só o símbolo */
  @media (max-width: 480px) {
    .wordmark {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 650px) {
    gap: 18px;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  transition: color 0.25s ease;

  &:hover,
  &.active {
    color: var(--text-main);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: var(--primary);
    transition: width 0.25s ease;
    border-radius: 2px;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

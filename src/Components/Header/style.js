import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background: rgba(6, 9, 12, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border-card);
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.5px;
  color: var(--text-main);

  span {
    color: var(--primary);
  }

  img {
    height: 36px;
    border-radius: 8px;
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

export const NavLink = styled(Link)`
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  position: relative;
  transition: color 0.25s ease;

  &:hover {
    color: var(--primary-light);
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

  &:hover::after {
    width: 100%;
  }
`;

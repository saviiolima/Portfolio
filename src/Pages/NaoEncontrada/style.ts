import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  min-height: calc(100vh - 150px);
  padding: 80px 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;

  .code {
    font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-light);
    background: rgba(219, 185, 134, 0.1);
    border: 1px solid rgba(219, 185, 134, 0.25);
    border-radius: 50px;
    padding: 6px 14px;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;

    @media (max-width: 600px) {
      font-size: 1.9rem;
    }
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

export const HomeLink = styled(Link)`
  margin-top: 12px;
  padding: 12px 24px;
  border-radius: 8px;
  background: var(--primary);
  color: #06141b;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px var(--primary-glow);
  }
`;

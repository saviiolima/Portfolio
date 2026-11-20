import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 24px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 24px;
  text-align: center;
  border-top: 1px solid var(--border-card);
  background: rgba(17, 33, 45, 0.6);
  backdrop-filter: blur(10px);
  color: var(--text-muted);
  font-size: 0.88rem;

  span {
    color: var(--primary);
  }

  a {
    color: var(--text-main);
    border-bottom: 1px solid var(--border-card);
    transition:
      color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      color: var(--primary);
      border-color: var(--primary);
    }
  }
`;

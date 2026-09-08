import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 24px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--border-card);
  background: rgba(11, 15, 23, 0.6);
  backdrop-filter: blur(10px);
  color: var(--text-muted);
  font-size: 0.88rem;

  span {
    color: var(--primary);
    margin: 0 4px;
  }
`;

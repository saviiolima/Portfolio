import styled from "styled-components";

export const Container = styled.section`
  padding: 96px 8%;
  scroll-margin-top: 80px;
  background: rgba(17, 33, 45, 0.35);
  border-top: 1px solid var(--border-card);
`;

export const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;

  .tag {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(219, 185, 134, 0.1);
    color: var(--primary-light);
    border: 1px solid rgba(219, 185, 134, 0.25);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 14px;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-bottom: 12px;

    @media (max-width: 600px) {
      font-size: 1.9rem;
    }
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 32px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const button = `
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PrimaryBtn = styled.a`
  ${button}
  background: var(--primary);
  color: #06141b;
  font-weight: 700;
  box-shadow: 0 4px 20px var(--primary-glow);

  &:hover {
    box-shadow: 0 8px 24px var(--primary-glow);
  }
`;

export const SecondaryBtn = styled.a`
  ${button}
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-card);

  &:hover {
    border-color: rgba(219, 185, 134, 0.35);
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 150px);
  padding: 50px 8%;
`;

export const HeaderSection = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 50px auto;

  .tag {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(16, 185, 129, 0.1);
    color: var(--primary-light);
    border: 1px solid rgba(16, 185, 129, 0.25);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 14px;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    margin-bottom: 12px;

    @media (max-width: 600px) {
      font-size: 2.1rem;
    }
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    line-height: 1.6;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  margin-bottom: 60px;
`;

export const Card = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 18px;
  padding: 32px;
  backdrop-filter: blur(14px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(16, 185, 129, 0.35);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }

  .card-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(16, 185, 129, 0.12);
    color: var(--primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text-main);
  }

  p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const BenchmarkSection = styled.section`
  margin-top: 60px;
  text-align: center;

  .section-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--primary-light);
    margin-bottom: 10px;

    h2 {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--text-main);
      letter-spacing: -0.5px;
    }
  }

  .section-desc {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 30px;
  }
`;

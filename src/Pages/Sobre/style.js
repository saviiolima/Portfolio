import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 150px);
  padding: 50px 8%;
`;

export const HeaderSection = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto 50px auto;

  .tag {
    display: inline-block;
    padding: 6px 14px;
    background: rgba(56, 189, 248, 0.1);
    color: var(--primary);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 14px;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    letter-spacing: -0.5px;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const BioCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 36px;
  backdrop-filter: blur(14px);

  h2 {
    font-size: 1.6rem;
    margin-bottom: 18px;
    color: var(--text-main);
  }

  p {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 16px;
    font-size: 1rem;
  }
`;

export const Highlights = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  .item {
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.03);
    padding: 14px 18px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.04);

    .icon {
      font-size: 1.4rem;
      color: var(--primary);
      flex-shrink: 0;
    }

    h4 {
      font-size: 0.98rem;
      color: var(--text-main);
      margin-bottom: 2px;
    }

    span {
      font-size: 0.82rem;
      color: var(--text-muted);
    }
  }
`;

export const SkillsCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 16px;
  padding: 36px;
  backdrop-filter: blur(14px);

  h2 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    color: var(--text-main);
  }

  .subtitle {
    color: var(--text-muted);
    font-size: 0.95rem;
    margin-bottom: 24px;
  }
`;

export const CategoryGroup = styled.div`
  margin-bottom: 22px;

  h3 {
    font-size: 0.92rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--primary);
    margin-bottom: 12px;
    font-weight: 700;
  }
`;

export const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const SkillBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 500;
  color: #e2e8f0;
  transition: all 0.25s ease;

  .skill-icon {
    font-size: 1.15rem;
    transition: color 0.25s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${(props) => props.$hoverColor || "var(--primary)"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    .skill-icon {
      color: ${(props) => props.$hoverColor || "var(--primary)"};
    }
  }
`;

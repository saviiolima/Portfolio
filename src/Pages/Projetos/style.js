import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 150px);
  padding: 50px 8%;
`;

export const HeaderSection = styled.div`
  text-align: center;
  max-width: 680px;
  margin: 0 auto 40px auto;

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

export const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 45px;
`;

export const FilterButton = styled.button`
  background: ${(props) =>
    props.$active ? "var(--primary)" : "rgba(255, 255, 255, 0.04)"};
  color: ${(props) => (props.$active ? "#0b0f17" : "var(--text-muted)")};
  font-weight: ${(props) => (props.$active ? "700" : "500")};
  border: 1px solid
    ${(props) => (props.$active ? "var(--primary)" : "var(--border-card)")};
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.25s ease;

  &:hover {
    color: ${(props) => (props.$active ? "#0b0f17" : "var(--text-main)")};
    border-color: rgba(56, 189, 248, 0.5);
    transform: translateY(-1px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 28px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border-card);
  border-radius: 18px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(14px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${(props) =>
      props.$featured
        ? "linear-gradient(90deg, #38bdf8, #818cf8)"
        : "transparent"};
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(56, 189, 248, 0.3);
    box-shadow:
      0 15px 35px rgba(0, 0, 0, 0.4),
      0 0 25px rgba(56, 189, 248, 0.1);
  }
`;

export const CardHeader = styled.div`
  margin-bottom: 16px;

  .top-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .category {
    font-size: 0.78rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: var(--primary);
  }

  .privacy-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 50px;
    background: rgba(245, 158, 11, 0.1);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.25);
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-main);
    line-height: 1.35;
  }
`;

export const Description = styled.p`
  color: var(--text-muted);
  font-size: 0.93rem;
  line-height: 1.6;
  margin-bottom: 22px;
  flex-grow: 1;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Tag = styled.span`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-size: 0.78rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 6px;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 18px;

  a,
  button {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.86rem;
    font-weight: 600;
    padding: 9px 14px;
    border-radius: 8px;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
  }

  .primary-action {
    background: rgba(56, 189, 248, 0.12);
    color: var(--primary);
    border: 1px solid rgba(56, 189, 248, 0.25);

    &:hover {
      background: var(--primary);
      color: #0b0f17;
    }
  }

  .secondary-action {
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-muted);
    border: 1px solid rgba(255, 255, 255, 0.06);

    &:hover {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
    }
  }

  .detail-action {
    width: 100%;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-main);
    border: 1px solid rgba(255, 255, 255, 0.12);

    &:hover {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.4);
      color: var(--primary);
    }
  }
`;

/* Modal de Case Study */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  max-width: 620px;
  width: 100%;
  padding: 32px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-muted);
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      color: var(--text-main);
    }
  }

  .modal-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(245, 158, 11, 0.12);
    color: #f59e0b;
    border: 1px solid rgba(245, 158, 11, 0.3);
    padding: 4px 10px;
    border-radius: 50px;
    font-size: 0.78rem;
    font-weight: 600;
    margin-bottom: 12px;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 14px;
    color: var(--text-main);
  }

  p {
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }

  h4 {
    font-size: 0.98rem;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;

    li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: #cbd5e1;
      font-size: 0.9rem;
      line-height: 1.5;

      &::before {
        content: "✔";
        color: var(--primary);
        font-weight: bold;
      }
    }
  }
`;

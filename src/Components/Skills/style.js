import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 30px auto 0 auto;
  background: #0B1A24;
  border: 1px solid rgba(219, 185, 134, 0.28);
  border-radius: 10px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.7),
    0 0 25px rgba(219, 185, 134, 0.08);
  overflow: hidden;
  font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
`;

export const WindowHeader = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  .window-dots {
    display: flex;
    gap: 7px;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      &.red {
        background: #4A5C6A;
      }
      &.yellow {
        background: #9BA8AB;
      }
      &.green {
        background: #DBB986;
      }
    }
  }

  .window-title {
    font-size: 0.78rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.5px;
  }
`;

export const Body = styled.div`
  padding: 24px;
  display: grid;
  gap: 24px;
`;

export const Group = styled.section`
  h3 {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--primary-light);
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  li {
    font-size: 0.82rem;
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--border-card);
    border-radius: 6px;
    padding: 6px 12px;
  }
`;

import styled from "styled-components";

export const HeroContainer = styled.main`
  min-height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 8%;
  gap: 50px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding-top: 50px;
  }
`;

export const InfoBox = styled.div`
  max-width: 580px;

  .badge {
    display: inline-block;
    padding: 6px 16px;
    background: rgba(56, 189, 248, 0.1);
    color: var(--primary);
    border: 1px solid rgba(56, 189, 248, 0.25);
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 16px;
    letter-spacing: -1px;

    span {
      background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  h2 {
    font-size: 1.15rem;
    font-weight: 400;
    color: var(--text-muted);
    margin-bottom: 32px;
    line-height: 1.6;

    strong {
      color: var(--text-main);
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #38bdf8, #6366f1);
  color: #0b0f17;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--primary-glow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(56, 189, 248, 0.35);
  }
`;

export const SecondaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: var(--bg-card);
  color: var(--text-main);
  border: 1px solid var(--border-card);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const TerminalWindow = styled.div`
  width: 100%;
  max-width: 480px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.5),
    0 0 25px rgba(56, 189, 248, 0.15);
  overflow: hidden;
  backdrop-filter: blur(16px);
  text-align: left;

  .terminal-header {
    background: rgba(255, 255, 255, 0.04);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);

    .dots {
      display: flex;
      gap: 7px;

      .dot {
        width: 11px;
        height: 11px;
        border-radius: 50%;

        &.red {
          background: #ef4444;
        }
        &.yellow {
          background: #f59e0b;
        }
        &.green {
          background: #10b981;
        }
      }
    }

    .title {
      font-size: 0.8rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: monospace;
    }
  }

  .terminal-body {
    padding: 20px;
    font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #e2e8f0;

    .keyword {
      color: #f43f5e;
      font-weight: 600;
    }
    .class-name {
      color: #38bdf8;
      font-weight: 600;
    }
    .string {
      color: #34d399;
    }
    .func {
      color: #fbbf24;
    }
  }
`;

import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const lineFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  scroll-margin-top: 80px;
  min-height: min(calc(100vh - 80px), 760px);
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 8%;
  gap: 80px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding-top: 50px;
  }
`;

export const InfoBox = styled.div`
  max-width: 580px;

  h1 {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.15;
    margin-bottom: 16px;
    letter-spacing: -1px;

    span {
      color: var(--primary);
    }

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  .lead {
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
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

export const SecondaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 20px;
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
    border-color: rgba(219, 185, 134, 0.35);
    transform: translateY(-2px);
  }
`;

export const TerminalWindow = styled.div`
  width: 100%;
  max-width: 490px;
  min-height: 380px;
  background: rgba(6, 20, 27, 0.88);
  border: 1px solid rgba(219, 185, 134, 0.2);
  border-radius: 14px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.6),
    0 0 25px rgba(219, 185, 134, 0.12);
  overflow: hidden;
  backdrop-filter: blur(16px);
  text-align: left;
  display: flex;
  flex-direction: column;

  .terminal-header {
    background: rgba(255, 255, 255, 0.03);
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
          background: #4a5c6a;
        }
        &.yellow {
          background: #9ba8ab;
        }
        &.green {
          background: #dbb986;
        }
      }
    }

    .title {
      font-size: 0.82rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 6px;
      font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
    }
  }

  .terminal-body {
    padding: 20px;
    font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
    font-size: 0.88rem;
    line-height: 1.65;
    color: #ccd0cf;
    flex-grow: 1;

    .code-line {
      animation: ${lineFadeIn} 0.18s ease-out forwards;
      white-space: pre-wrap;
    }

    .keyword {
      color: #e6cda3;
      font-weight: 600;
    }
    .class-name {
      color: #9ba8ab;
      font-weight: 600;
    }
    .string {
      color: #f0dfc3;
    }
    .func {
      color: #9ba8ab;
    }

    .terminal-cursor {
      display: inline-block;
      color: var(--primary);
      font-size: 0.9rem;
      margin-left: 2px;
      animation: ${blink} 0.8s infinite;
    }
  }
`;

export const IconLink = styled.a`
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  color: var(--text-muted);
  border: 1px solid var(--border-card);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: var(--primary);
    border-color: rgba(219, 185, 134, 0.35);
    transform: translateY(-2px);
  }
`;

export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 12px 20px;
  background: var(--primary);
  color: #06141b;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px var(--primary-glow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--primary-glow);
  }
`;

const nudge = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

export const ScrollHint = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--text-muted);
  border: 1px solid var(--border-card);
  background: var(--bg-card);
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  svg {
    animation: ${nudge} 1.8s ease-in-out infinite;
  }

  &:hover {
    color: var(--primary);
    border-color: var(--primary);
  }

  /* Com o conteúdo empilhado a página já convida a rolar */
  @media (max-width: 960px) {
    display: none;
  }
`;

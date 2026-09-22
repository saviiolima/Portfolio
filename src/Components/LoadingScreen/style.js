import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #05080b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 440px;
  text-align: center;
  font-family: "Fira Code", "JetBrains Mono", Consolas, monospace;
`;

export const LogoBox = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 24px;
  border-radius: 14px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(16, 185, 129, 0.2);
  animation: ${pulse} 2s infinite ease-in-out;

  .logo-text {
    font-size: 1.6rem;
    font-weight: 900;
    letter-spacing: -1px;
    background: linear-gradient(135deg, #10b981, #06b6d4);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Title = styled.h2`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f1f5f9;
  margin-bottom: 20px;
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ProgressBarFill = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background: linear-gradient(90deg, #10b981, #06b6d4);
  box-shadow: 0 0 12px rgba(16, 185, 129, 0.8);
  transition: width 0.1s linear;
`;

export const StatusLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-muted, #94a3b8);

  .log-text {
    color: #10b981;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
  }

  .percent {
    font-weight: 700;
    color: #f1f5f9;
  }
`;

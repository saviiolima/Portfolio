import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.05); opacity: 1; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #06141B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 440px;
  text-align: center;
`;

export const LogoBox = styled.div`
  width: 84px;
  height: 84px;
  margin: 0 auto 24px;
  border-radius: 20px;
  background: var(--deep);
  border: 1px solid var(--mid);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  animation: ${pulse} 2s infinite ease-in-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Title = styled.h2`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--light);
  margin-bottom: 20px;
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 8px;
  background: var(--deep);
  border: 1px solid var(--mid);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ProgressBarFill = styled.div`
  width: ${(props) => props.$width}%;
  height: 100%;
  background: var(--areia);
  transition: width 0.1s linear;
`;

export const StatusLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  color: var(--text-muted, #9BA8AB);

  .log-text {
    color: #DBB986;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
  }

  .percent {
    font-weight: 700;
    color: #CCD0CF;
  }
`;

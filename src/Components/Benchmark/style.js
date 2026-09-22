import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

export const BenchmarkContainer = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 30px auto 0 auto;
  background: #090e12;
  border: 1px solid rgba(16, 185, 129, 0.28);
  border-radius: 10px;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.7),
    0 0 25px rgba(16, 185, 129, 0.08);
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

  .window-title {
    font-size: 0.78rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: 0.5px;
  }
`;

export const WindowBody = styled.div`
  padding: 22px 24px;
  text-align: left;

  .benchmark-subhead {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 22px;

    .tab-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      background: #10b981;
      color: #06090c;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 4px;
      letter-spacing: 0.4px;
      text-transform: uppercase;
    }

    .info-txt {
      font-size: 0.8rem;
      color: var(--text-muted);
    }
  }
`;

export const RowsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SkillRow = styled.div`
  display: grid;
  grid-template-columns: 240px 70px 1fr 85px;
  align-items: center;
  gap: 14px;
  font-size: 0.86rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr 60px 70px;
    grid-template-rows: auto auto;
  }

  .skill-label-box {
    display: flex;
    align-items: center;

    .skill-label {
      background: #162026;
      color: #f1f5f9;
      padding: 4px 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      font-weight: 600;
      font-size: 0.82rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .ratio-val {
    color: var(--text-muted);
    font-size: 0.82rem;
    text-align: right;
  }

  .cost-val {
    color: #34d399;
    font-size: 0.82rem;
    text-align: right;
    font-weight: 600;
  }
`;

export const TrackWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;

  /* A régua / linha horizontal estilo terminal */
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.22);
  }

  @media (max-width: 760px) {
    grid-column: 1 / -1;
  }
`;

export const SliderThumb = styled.div`
  position: absolute;
  left: ${(props) => props.$pos}%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: #34d399;
  border: 1px solid #10b981;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.85);
  transition: left 1.8s cubic-bezier(0.25, 1, 0.5, 1);
`;

export const WindowFooter = styled.div`
  margin-top: 26px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  .dot-pattern {
    width: 100%;
    height: 12px;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.15) 1px,
      transparent 1px
    );
    background-size: 6px 6px;
    margin-bottom: 10px;
  }

  .footer-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.72rem;
    color: var(--text-muted);

    .mono-status {
      color: #10b981;
      font-weight: 700;
      animation: ${blink} 1.8s infinite;
    }
  }
`;

import { useEffect, useState } from "react";
import * as S from "./style";

const BOOT_LOGS = [
  "INITIALIZING SYSTEM ARCHITECTURE...",
  "LOADING CORE MODULES & DRIVERS...",
  "RESOLVING API CONTRACTS & SECURITY POLICIES...",
  "CALIBRATING TELEMETRY BENCHMARKS...",
  "STARTING USER ENVIRONMENT: SAVIO_LIMA@PRODUCTION",
];

// eslint-disable-next-line react/prop-types
export default function LoadingScreen({ onFinish = () => {} }) {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progresso fluido até 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 60);

    // Alterna os logs na tela
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 250);

    // Finaliza após ~1,3s
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, 1300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <S.Overlay>
      <S.Container>
        <S.LogoBox>
          <span className="logo-text">SL</span>
        </S.LogoBox>

        <S.Title>SL_OS // INITIALIZING</S.Title>

        <S.ProgressBarTrack>
          <S.ProgressBarFill $width={progress} />
        </S.ProgressBarTrack>

        <S.StatusLine>
          <span className="log-text">{BOOT_LOGS[logIndex]}</span>
          <span className="percent">{progress}%</span>
        </S.StatusLine>
      </S.Container>
    </S.Overlay>
  );
}

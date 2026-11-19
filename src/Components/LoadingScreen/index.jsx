import { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "../Logo";

const BOOT_LOGS = [
  "Preparando o ambiente...",
  "Carregando projetos...",
  "Organizando interfaces...",
  "Conferindo detalhes...",
  "Tudo pronto.",
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
          <Logo size={44} />
        </S.LogoBox>

        <S.Title>Sávio Lima</S.Title>

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

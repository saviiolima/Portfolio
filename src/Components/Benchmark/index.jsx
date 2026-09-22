import { useState, useEffect } from "react";
import * as S from "./style";
import { FaTerminal, FaPlay } from "react-icons/fa";

const SKILLS_DATA = [
  {
    name: "Python / Data Science",
    baseRatio: "193.6x",
    baseCost: "$0.0012",
    minPos: 12,
    maxPos: 40,
  },
  {
    name: "React / Frontend Architecture",
    baseRatio: "42.8x",
    baseCost: "$0.0024",
    minPos: 65,
    maxPos: 92,
  },
  {
    name: "TypeScript & Ecosystem",
    baseRatio: "18.4x",
    baseCost: "$0.0045",
    minPos: 35,
    maxPos: 68,
  },
  {
    name: "SQL & Database Engineering",
    baseRatio: "85.2x",
    baseCost: "$0.0019",
    minPos: 48,
    maxPos: 78,
  },
  {
    name: "Automation & APIs (Apps Script)",
    baseRatio: "64.0x",
    baseCost: "$0.0031",
    minPos: 20,
    maxPos: 55,
  },
];

export default function SkillsBenchmark() {
  const [positions, setPositions] = useState(
    SKILLS_DATA.map((s) => s.minPos + Math.random() * (s.maxPos - s.minPos)),
  );

  // Efeito que movimenta os cursores periodicamente simulando o benchmark ativo
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(
        SKILLS_DATA.map((s) => {
          const range = s.maxPos - s.minPos;
          return s.minPos + Math.random() * range;
        }),
      );
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <S.BenchmarkContainer>
      <S.WindowHeader>
        <div className="window-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-title">
          <FaTerminal size={11} /> core-runtime / live_telemetry.eval
        </div>
      </S.WindowHeader>

      <S.WindowBody>
        <div className="benchmark-subhead">
          <div className="tab-pill active">
            <FaPlay size={9} /> Telemetry Benchmark
          </div>
          <span className="info-txt">continuous evaluation slider engine</span>
        </div>

        <S.RowsList>
          {SKILLS_DATA.map((item, index) => (
            <S.SkillRow key={item.name}>
              <div className="skill-label-box">
                <span className="skill-label">{item.name}</span>
              </div>
              <span className="ratio-val">{item.baseRatio}</span>

              {/* Linha horizontal com o bloco cursor deslizante estilo terminal */}
              <S.TrackWrapper>
                <S.SliderThumb $pos={positions[index]} />
              </S.TrackWrapper>

              <span className="cost-val">{item.baseCost}</span>
            </S.SkillRow>
          ))}
        </S.RowsList>

        <S.WindowFooter>
          <div className="dot-pattern" />
          <div className="footer-meta">
            <span className="mono-status">LATENCY SAMPLER: RUNNING</span>
            <span className="mono-clock">REFRESH: 2.4s POLLING</span>
          </div>
        </S.WindowFooter>
      </S.WindowBody>
    </S.BenchmarkContainer>
  );
}

import { useState, useEffect } from "react";
import * as S from "./style";
import { FaLinkedin, FaGithub, FaTerminal } from "react-icons/fa";

const CODE_LINES = [
  { text: "class DeveloperProfile:", type: "keyword" },
  { text: '  name = "Sávio Lima"', type: "statement" },
  {
    text: '  domains = ["Software Engineering", "Data Analysis"]',
    type: "statement",
  },
  { text: "  stack = [", type: "statement" },
  { text: '    "React / Next.js",', type: "item" },
  { text: '    "TypeScript / Node",', type: "item" },
  { text: '    "Python / pandas",', type: "item" },
  { text: '    "Supabase / RBAC"', type: "item" },
  { text: "  ]", type: "statement" },
  { text: "", type: "empty" },
  { text: "  def mission(self):", type: "func" },
  {
    text: '    return "Transforming complex data into robust products"',
    type: "return",
  },
];

export default function Inicio() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let timer;

    if (visibleCount < CODE_LINES.length) {
      // Tempo entre cada linha descendo em cascata
      timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 180);
    } else {
      // Pausa com todas as linhas visíveis antes de reiniciar o ciclo
      timer = setTimeout(() => {
        setVisibleCount(0);
      }, 4200);
    }

    return () => clearTimeout(timer);
  }, [visibleCount]);

  const renderFormattedLine = (line) => {
    if (!line.text) return "\u00A0";

    if (line.type === "keyword") {
      return (
        <>
          <span className="keyword">class</span>{" "}
          <span className="class-name">DeveloperProfile</span>:
        </>
      );
    }
    if (line.type === "func") {
      return (
        <>
          {"  "}
          <span className="keyword">def</span>{" "}
          <span className="func">mission</span>(self):
        </>
      );
    }
    if (line.type === "return") {
      return (
        <>
          {"    "}
          <span className="keyword">return</span>{" "}
          <span className="string">
            {'"Transforming complex data into robust products"'}
          </span>
        </>
      );
    }
    if (line.type === "item") {
      return (
        <>
          {"    "}
          <span className="string">{line.text.trim()}</span>
        </>
      );
    }

    const parts = line.text.split(/(".*?")/g);
    return parts.map((part, i) =>
      part.startsWith('"') ? (
        <span key={i} className="string">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      ),
    );
  };

  return (
    <S.HeroContainer>
      <S.InfoBox>
        <h1>
          Olá, sou <span>Sávio Lima</span>
        </h1>
        <h2>
          Desenvolvedor de Software focado em <strong>Aplicações Web</strong> e{" "}
          <strong>Engenharia de Dados</strong>. Conecto pensamento analítico a
          interfaces modernas, automações e dashboards institucionais em larga
          escala.
        </h2>
        <S.Actions>
          <S.PrimaryBtn
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={18} /> LinkedIn
          </S.PrimaryBtn>
          <S.SecondaryBtn
            href="https://github.com/saviiolima"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} /> GitHub
          </S.SecondaryBtn>
        </S.Actions>
      </S.InfoBox>

      <S.TerminalWindow>
        <div className="terminal-header">
          <div className="dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="title">
            <FaTerminal size={12} /> savio_core.py
          </div>
        </div>

        <pre className="terminal-body">
          <code>
            {CODE_LINES.slice(0, visibleCount).map((line, idx) => (
              <div key={idx} className="code-line">
                {renderFormattedLine(line)}
              </div>
            ))}
            <span className="terminal-cursor">█</span>
          </code>
        </pre>
      </S.TerminalWindow>
    </S.HeroContainer>
  );
}

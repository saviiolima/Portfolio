import { useState, useEffect } from "react";
import * as S from "./style";
import {
  FaLinkedin,
  FaGithub,
  FaTerminal,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { CONTACT } from "../../data/contact";
import { projectsData } from "../../data/projects";

type LineType = "keyword" | "statement" | "item" | "empty" | "func" | "return";

interface CodeLine {
  text: string;
  type: LineType;
}

const CODE_LINES: CodeLine[] = [
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

// O terminal já abre com as primeiras linhas escritas, para não aparecer vazio
const INITIAL_LINES = 6;
const TYPING_DELAY = 110;
const RESTART_PAUSE = 4200;

const FEATURED = projectsData.filter((p) => p.featured).slice(0, 3);

const reducedMotion =
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Inicio() {
  const [visibleCount, setVisibleCount] = useState(
    reducedMotion ? CODE_LINES.length : INITIAL_LINES,
  );

  useEffect(() => {
    // Sem animação: o código fica completo e parado
    if (reducedMotion) return undefined;

    let timer: ReturnType<typeof setTimeout>;

    if (visibleCount < CODE_LINES.length) {
      // Tempo entre cada linha descendo em cascata
      timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, TYPING_DELAY);
    } else {
      // Pausa com todas as linhas visíveis antes de reiniciar o ciclo
      timer = setTimeout(() => {
        setVisibleCount(INITIAL_LINES);
      }, RESTART_PAUSE);
    }

    return () => clearTimeout(timer);
  }, [visibleCount]);

  const renderFormattedLine = (line: CodeLine) => {
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
    <S.Page>
      <S.HeroContainer>
        <S.InfoBox>
          <h1>
            Olá, sou <span>Sávio Lima</span>
          </h1>
          <h2>
            Desenvolvedor de Software focado em <strong>Aplicações Web</strong>{" "}
            e <strong>Engenharia de Dados</strong>. Conecto pensamento analítico
            a interfaces modernas, automações e dashboards institucionais em
            larga escala.
          </h2>
          <S.Actions>
            <S.PrimaryBtn
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} /> LinkedIn
            </S.PrimaryBtn>
            <S.SecondaryBtn
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} /> GitHub
            </S.SecondaryBtn>
            <S.SecondaryBtn href={`mailto:${CONTACT.email}`}>
              <FaEnvelope size={17} /> E-mail
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

          <pre className="terminal-body" aria-hidden="true">
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

      <S.Featured aria-labelledby="destaques-titulo">
        <div className="section-head">
          <span className="tag">Em destaque</span>
          <h2 id="destaques-titulo">Projetos em destaque</h2>
          <p>Uma amostra dos sistemas em que mais trabalhei.</p>
        </div>

        <S.FeaturedGrid>
          {FEATURED.map((project) => (
            <S.FeaturedCard key={project.id}>
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.tags.slice(0, 4).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </S.FeaturedCard>
          ))}
        </S.FeaturedGrid>

        <div className="see-all">
          <S.PrimaryLink to="/Projetos">
            Ver todos os projetos <FaArrowRight size={13} />
          </S.PrimaryLink>
        </div>
      </S.Featured>
    </S.Page>
  );
}

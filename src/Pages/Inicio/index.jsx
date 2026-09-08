import * as S from "./style";
import { FaLinkedin, FaFilePdf, FaGithub, FaTerminal } from "react-icons/fa";

export default function Inicio() {
  return (
    <S.HeroContainer>
      <S.InfoBox>
        <div className="badge">🚀 Disponível para novos projetos</div>
        <h1>
          Olá, sou <span>Sávio Lima</span>
        </h1>
        <h2>
          Desenvolvedor de Software focado em <strong>Aplicações Web</strong> e{" "}
          <strong>Análise de Dados</strong>. Transformo dados e regras de
          negócio em interfaces fluidas, dashboards e automações eficientes.
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={18} /> GitHub
          </S.SecondaryBtn>
          <S.SecondaryBtn
            href="/SavioLima.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf size={18} /> Currículo
          </S.SecondaryBtn>
        </S.Actions>
      </S.InfoBox>

      {/* Terminal Mockup Moderno substituindo a foto */}
      <S.TerminalWindow>
        <div className="terminal-header">
          <div className="dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="title">
            <FaTerminal size={12} /> developer.py
          </div>
        </div>
        <pre className="terminal-body">
          <code>
            <span className="keyword">class</span>{" "}
            <span className="class-name">Developer</span>:{"\n"}
            {"  "}name = <span className="string">"Sávio Lima"</span>
            {"\n"}
            {"  "}role ={" "}
            <span className="string">"Full Stack & Data Enthusiast"</span>
            {"\n"}
            {"  "}skills = [{"\n"}
            {"    "}
            <span className="string">"React"</span>,{" "}
            <span className="string">"JavaScript"</span>,{"\n"}
            {"    "}
            <span className="string">"Python"</span>,{" "}
            <span className="string">"pandas"</span>,{"\n"}
            {"    "}
            <span className="string">"Styled-Components"</span>
            {"\n"}
            {"  "}]{"\n\n"}
            {"  "}
            <span className="keyword">def</span>{" "}
            <span className="func">build_solution</span>(self):{"\n"}
            {"    "}
            <span className="keyword">return</span>{" "}
            <span className="string">"Clean code & High performance"</span>
          </code>
        </pre>
      </S.TerminalWindow>
    </S.HeroContainer>
  );
}

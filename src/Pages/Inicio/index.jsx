import * as S from "./style";
import { FaLinkedin, FaGithub, FaTerminal } from "react-icons/fa";

export default function Inicio() {
  return (
    <S.HeroContainer>
      <S.InfoBox>
        <div className="badge">Software Development</div>
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
            <span className="keyword">class</span>{" "}
            <span className="class-name">DeveloperProfile</span>:{"\n"}
            {"  "}name = <span className="string">"Sávio Lima"</span>
            {"\n"}
            {"  "}domains = [
            <span className="string">"Software Engineering"</span>,{" "}
            <span className="string">"Data Analysis"</span>]{"\n"}
            {"  "}stack = [{"\n"}
            {"    "}
            <span className="string">"React / Next.js"</span>,{"\n"}
            {"    "}
            <span className="string">"TypeScript / Node"</span>,{"\n"}
            {"    "}
            <span className="string">"Python / pandas"</span>,{"\n"}
            {"    "}
            <span className="string">"Supabase / RBAC"</span>
            {"\n"}
            {"  "}]{"\n\n"}
            {"  "}
            <span className="keyword">def</span>{" "}
            <span className="func">mission</span>(self):{"\n"}
            {"    "}
            <span className="keyword">return</span>{" "}
            <span className="string">
              "Transforming complex data into robust products"
            </span>
          </code>
        </pre>
      </S.TerminalWindow>
    </S.HeroContainer>
  );
}

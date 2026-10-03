import * as S from "./style";
import SkillsBenchmark from "../../Components/Benchmark/index.jsx";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";

export default function Sobre() {
  return (
    <S.Container>
      <S.HeaderSection>
        <span className="tag">Sobre Mim</span>
        <h1>Conheça um pouco da minha trajetória</h1>
        <p>
          Formação interdisciplinar unindo ciências e tecnologia, com foco em
          desenvolvimento de software, engenharia de dados e soluções
          escaláveis.
        </p>
      </S.HeaderSection>

      <S.ContentGrid>
        <S.Card>
          <div className="card-icon">
            <FaBriefcase size={20} />
          </div>
          <h3>Experiência & Atuação</h3>
          <p>
            Atuação no setor público e privado desenvolvendo aplicações web
            modernas, automações com Google Apps Script, dashboards
            institucionais e gerenciamento de dados educacionais.
          </p>
        </S.Card>

        <S.Card>
          <div className="card-icon">
            <FaGraduationCap size={20} />
          </div>
          <h3>Formação & Acadêmico</h3>
          <p>
            Graduação em Ciências Biológicas, formação em Análise e
            Desenvolvimento de Sistemas (ADS) pela UnP, e estudos contínuos em
            Gestão Pública e engenharia de software.
          </p>
        </S.Card>

        <S.Card>
          <div className="card-icon">
            <FaDatabase size={20} />
          </div>
          <h3>Do dado ao produto</h3>
          <p>
            Transformo planilhas e bases dispersas em sistemas utilizáveis:
            importação em lote, relatórios consolidados e dashboards que apoiam
            decisões pedagógicas e de gestão.
          </p>
        </S.Card>

        <S.Card>
          <div className="card-icon">
            <FaShieldAlt size={20} />
          </div>
          <h3>Segurança e dados sensíveis</h3>
          <p>
            Trabalho com dados educacionais protegidos, aplicando controle de
            acesso por perfil (RBAC), políticas em nível de linha com Supabase e
            cuidados com LGPD, tokens e sanitização de entradas.
          </p>
        </S.Card>
      </S.ContentGrid>

      <S.BenchmarkSection>
        <div className="section-title">
          <FaCode size={18} />
          <h2>System Benchmarks & Core Skills</h2>
        </div>
        <p className="section-desc">
          Métricas de desempenho e avaliação em tempo real das principais
          tecnologias e stacks utilizadas no dia a dia.
        </p>

        <SkillsBenchmark />
      </S.BenchmarkSection>
    </S.Container>
  );
}

import * as S from "./style";
import { skillsData } from "../../data/skills";
import { FaGraduationCap, FaCode, FaChartLine } from "react-icons/fa";

export default function Sobre() {
  const categories = ["Frontend", "Dados & Scripting", "Ferramentas"];

  return (
    <S.Container>
      <S.HeaderSection>
        <span className="tag">Sobre Mim</span>
        <h1>Conheça um pouco da minha trajetória</h1>
      </S.HeaderSection>

      <S.ContentGrid>
        <S.BioCard>
          <h2>Minha História</h2>
          <p>
            Com formação interdisciplinar entre as ciências e a tecnologia,
            combino a capacidade de análise crítica e resolução de problemas
            complexos com o desenvolvimento de software.
          </p>
          <p>
            Atuo na criação de soluções digitais ponta a ponta: desde aplicações
            frontend modernas e responsivas em React até a manipulação,
            modelagem e automação de fluxos de dados com Python.
          </p>

          <S.Highlights>
            <div className="item">
              <FaCode className="icon" />
              <div>
                <h4>Desenvolvimento Web</h4>
                <span>Interfaces reativas, limpas e acessíveis</span>
              </div>
            </div>
            <div className="item">
              <FaChartLine className="icon" />
              <div>
                <h4>Análise & Automação</h4>
                <span>Scripts Python e dashboards com pandas</span>
              </div>
            </div>
            <div className="item">
              <FaGraduationCap className="icon" />
              <div>
                <h4>Aprendizado Contínuo</h4>
                <span>Foco em arquitetura escalável e boas práticas</span>
              </div>
            </div>
          </S.Highlights>
        </S.BioCard>

        <S.SkillsCard>
          <h2>Tecnologias & Ferramentas</h2>
          <p className="subtitle">
            Linguagens e ferramentas que utilizo no dia a dia:
          </p>

          {categories.map((category) => (
            <S.CategoryGroup key={category}>
              <h3>{category}</h3>
              <S.SkillGrid>
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <S.SkillBadge key={skill.name} $hoverColor={skill.color}>
                        <IconComponent className="skill-icon" />
                        <span>{skill.name}</span>
                      </S.SkillBadge>
                    );
                  })}
              </S.SkillGrid>
            </S.CategoryGroup>
          ))}
        </S.SkillsCard>
      </S.ContentGrid>
    </S.Container>
  );
}

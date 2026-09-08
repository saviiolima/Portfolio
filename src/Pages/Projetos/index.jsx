import { useState } from "react";
import * as S from "./style";
import { projectsData } from "../../data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

export default function Projetos() {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    "Todos",
    "Aplicações & Portais",
    "Dashboards & Dados",
    "Frontend",
  ];

  const filteredProjects =
    selectedFilter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <S.Container>
      <S.HeaderSection>
        <span className="tag">Portfólio de Projetos</span>
        <h1>Soluções & Aplicações</h1>
        <p>
          Sistemas web completos, arquitetura de permissões (RBAC) e dashboards
          analíticos de alto impacto.
        </p>
      </S.HeaderSection>

      <S.FilterBar>
        {categories.map((cat) => (
          <S.FilterButton
            key={cat}
            $active={selectedFilter === cat}
            onClick={() => setSelectedFilter(cat)}
          >
            {cat}
          </S.FilterButton>
        ))}
      </S.FilterBar>

      <S.Grid>
        {filteredProjects.map((project) => (
          <S.ProjectCard key={project.id} $featured={project.featured}>
            <div>
              <S.CardHeader>
                <div className="top-meta">
                  <span className="category">{project.category}</span>
                  {project.isPrivate && (
                    <span className="privacy-badge">
                      <FaLock size={9} /> {project.privacyNote || "Privado"}
                    </span>
                  )}
                </div>
                <h3>{project.title}</h3>
              </S.CardHeader>
              <S.Description>{project.description}</S.Description>
            </div>

            <div>
              <S.TagList>
                {project.tags.map((tag) => (
                  <S.Tag key={tag}>{tag}</S.Tag>
                ))}
              </S.TagList>

              <S.CardActions>
                {project.isPrivate ? (
                  <button
                    type="button"
                    className="detail-action"
                    onClick={() => setActiveModalProject(project)}
                  >
                    <FaInfoCircle size={14} /> Ver Arquitetura & Detalhes
                  </button>
                ) : (
                  <>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-action"
                    >
                      <FaExternalLinkAlt size={12} /> Acessar
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="secondary-action"
                    >
                      <FaGithub size={14} /> Código
                    </a>
                  </>
                )}
              </S.CardActions>
            </div>
          </S.ProjectCard>
        ))}
      </S.Grid>

      {/* Modal de Detalhes da Arquitetura / Case Study */}
      {activeModalProject && (
        <S.ModalOverlay onClick={() => setActiveModalProject(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-btn"
              onClick={() => setActiveModalProject(null)}
            >
              <FaTimes size={14} />
            </button>
            <div className="modal-badge">
              <FaLock size={10} /> Aplicação em Uso Institucional
            </div>
            <h2>{activeModalProject.title}</h2>
            <p>{activeModalProject.description}</p>

            <h4>Destaques Técnicos & Arquitetura</h4>
            <ul>
              {activeModalProject.highlights?.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <h4>Tecnologias Utilizadas</h4>
            <S.TagList>
              {activeModalProject.tags.map((tag) => (
                <S.Tag key={tag}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}

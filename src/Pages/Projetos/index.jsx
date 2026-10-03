import { useState, useEffect, useRef } from "react";
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
  const closeBtnRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const openModal = (project, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveModalProject(project);
  };

  const closeModal = () => setActiveModalProject(null);

  useEffect(() => {
    if (!activeModalProject) return undefined;

    closeBtnRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveModalProject(null);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeModalProject]);

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
            aria-pressed={selectedFilter === cat}
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
                    onClick={(e) => openModal(project, e)}
                  >
                    <FaInfoCircle size={14} /> Ver Arquitetura & Detalhes
                  </button>
                ) : (
                  <>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-action"
                      >
                        <FaExternalLinkAlt size={12} /> Acessar
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-action"
                      >
                        <FaGithub size={14} /> Código
                      </a>
                    )}
                  </>
                )}
              </S.CardActions>
            </div>
          </S.ProjectCard>
        ))}
      </S.Grid>

      {/* Modal de Detalhes da Arquitetura / Case Study */}
      {activeModalProject && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="close-btn"
              aria-label="Fechar detalhes do projeto"
              onClick={closeModal}
            >
              <FaTimes size={14} />
            </button>
            <div className="modal-badge">
              <FaLock size={10} />{" "}
              {activeModalProject.modalBadge || "Aplicação em Uso Institucional"}
            </div>
            <h2 id="modal-title">{activeModalProject.title}</h2>
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

import { useState, useEffect, useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import * as S from "./style";
import { projectsData } from "../../data/projects";
import type { PrivateProject, ProjectCategory } from "../../data/projects";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";

const INITIAL_VISIBLE = 6;

type Filter = "Todos" | ProjectCategory;

const CATEGORIES: Filter[] = [
  "Todos",
  "Aplicações & Portais",
  "Dashboards & Dados",
  "Frontend",
];

export default function Projetos() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("Todos");
  const [showAll, setShowAll] = useState(false);
  const [activeModalProject, setActiveModalProject] =
    useState<PrivateProject | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const openModal = (
    project: PrivateProject,
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveModalProject(project);
  };

  const closeModal = () => setActiveModalProject(null);

  useEffect(() => {
    if (!activeModalProject) return undefined;

    closeBtnRef.current?.focus();

    // Trava a rolagem da página enquanto o modal está aberto
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
        return;
      }
      if (e.key !== "Tab" || !modalRef.current) return;

      // Mantém o foco dentro do modal
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [activeModalProject]);

  const isAll = selectedFilter === "Todos";
  const filteredProjects = isAll
    ? [...projectsData].sort((a, b) => Number(b.featured) - Number(a.featured))
    : projectsData.filter((p) => p.category === selectedFilter);
  const visibleProjects =
    isAll && !showAll
      ? filteredProjects.slice(0, INITIAL_VISIBLE)
      : filteredProjects;
  const hiddenCount = filteredProjects.length - visibleProjects.length;

  return (
    <S.Container id="projetos" aria-labelledby="projetos-titulo">
      <S.HeaderSection>
        <span className="tag">Portfólio de Projetos</span>
        <h2 id="projetos-titulo">Soluções & Aplicações</h2>
        <p>
          Sistemas web completos, arquitetura de permissões (RBAC) e dashboards
          analíticos de alto impacto.
        </p>
      </S.HeaderSection>

      <S.FilterBar>
        {CATEGORIES.map((cat) => (
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
        {visibleProjects.map((project) => (
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

      {isAll && filteredProjects.length > INITIAL_VISIBLE && (
        <S.MoreWrapper>
          <S.FilterButton
            $active={false}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Mostrar menos" : `Mostrar mais (${hiddenCount})`}
          </S.FilterButton>
        </S.MoreWrapper>
      )}

      {/* Modal de Detalhes da Arquitetura / Case Study */}
      {activeModalProject && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent
            ref={modalRef}
            $wide={Boolean(activeModalProject.screenshots)}
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
              {activeModalProject.modalBadge ||
                "Aplicação em Uso Institucional"}
            </div>
            <h2 id="modal-title">{activeModalProject.title}</h2>
            <p>{activeModalProject.description}</p>

            <h4>Destaques Técnicos & Arquitetura</h4>
            <ul>
              {activeModalProject.highlights?.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            {activeModalProject.screenshots && (
              <>
                <h4>Telas do Sistema</h4>
                <S.Gallery>
                  {activeModalProject.screenshots.map((shot) => (
                    <figure key={shot.src} className={shot.wide ? "wide" : ""}>
                      <img
                        src={shot.src}
                        alt={shot.alt}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>{shot.caption}</figcaption>
                    </figure>
                  ))}
                </S.Gallery>
              </>
            )}

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

import * as S from "./style";
import { FaTerminal } from "react-icons/fa";

// Tecnologias usadas nos projetos publicados no GitHub e na página de projetos
const SKILL_GROUPS = [
  {
    title: "Front-end",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "styled-components",
      "SCSS",
    ],
  },
  {
    title: "Back-end & dados",
    items: [
      "Supabase / PostgreSQL",
      "SQL",
      "Python",
      "Node.js / Fastify",
      "Server Actions",
      "Google Apps Script",
    ],
  },
  {
    title: "Segurança & qualidade",
    items: [
      "RBAC",
      "RLS (Row Level Security)",
      "Zod",
      "Vitest / pytest",
      "ESLint",
      "GitHub Actions",
      "LGPD",
    ],
  },
];

export default function Skills() {
  return (
    <S.Container>
      <S.WindowHeader>
        <div className="window-dots" aria-hidden="true">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="window-title">
          <FaTerminal size={11} aria-hidden="true" /> stack / tecnologias.md
        </div>
      </S.WindowHeader>

      <S.Body>
        {SKILL_GROUPS.map((group) => (
          <S.Group key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </S.Group>
        ))}
      </S.Body>
    </S.Container>
  );
}

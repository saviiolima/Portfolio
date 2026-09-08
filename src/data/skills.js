import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiPandas, SiStyledcomponents, SiVite } from "react-icons/si";

export const skillsData = [
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    category: "Frontend",
  },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color: "#DB7093",
    category: "Frontend",
  },
  {
    name: "HTML5 & CSS3",
    icon: FaHtml5,
    color: "#E34F26",
    category: "Frontend",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    category: "Dados & Scripting",
  },
  {
    name: "pandas",
    icon: SiPandas,
    color: "#150458",
    category: "Dados & Scripting",
  },
  { name: "Git", icon: FaGitAlt, color: "#F05032", category: "Ferramentas" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff", category: "Ferramentas" },
  { name: "Vite", icon: SiVite, color: "#646CFF", category: "Ferramentas" },
];

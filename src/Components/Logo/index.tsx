// Símbolo da marca: barra vertical + chevron + três linhas.
// A cor principal vem de currentColor; as duas linhas de baixo usam a areia.
import type { SVGProps } from "react";

interface LogoProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  /** Largura em pixels; a altura acompanha a proporção do símbolo */
  size?: number;
  /** Cor das duas linhas de baixo */
  accent?: string;
}

export default function Logo({
  size = 32,
  accent = "var(--areia)",
  ...rest
}: LogoProps) {
  return (
    <svg
      width={size}
      height={(size * 186) / 180}
      viewBox="0 0 180 186"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M43.5 12.5V116.5" strokeWidth="13" />
      <path d="M70 22L140 66L70 110" strokeWidth="18" />
      <path d="M21.5 136H154.5" strokeWidth="13" />
      <path d="M40.5 155H167.5" strokeWidth="13" stroke={accent} />
      <path d="M12.5 174H132.5" strokeWidth="13" stroke={accent} />
    </svg>
  );
}

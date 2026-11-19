// Símbolo da marca: barra vertical + chevron + três linhas.
// A cor principal vem de currentColor; as duas linhas de baixo usam a areia.
// eslint-disable-next-line react/prop-types
export default function Logo({ size = 32, accent = "var(--areia)", ...rest }) {
  return (
    <svg
      width={size}
      height={(size * 190) / 180}
      viewBox="0 0 180 190"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d="M40 12V112" strokeWidth="15" />
      <path d="M64 14L136 62L64 110" strokeWidth="14" />
      <path d="M24 136H148" strokeWidth="13" />
      <path d="M44 155H165" strokeWidth="13" stroke={accent} />
      <path d="M14 174H124" strokeWidth="13" stroke={accent} />
    </svg>
  );
}

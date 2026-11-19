import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  code, pre, code *, pre *, .mono, .mono * {
    font-family: 'Fira Code', 'JetBrains Mono', Consolas, 'Courier New', monospace;
  }

  :root {
    /* Paleta da marca */
    --ink: #06141B;
    --deep: #11212D;
    --mid: #253745;
    --slate: #4A5C6A;
    --muted: #9BA8AB;
    --light: #CCD0CF;
    --areia: #DBB986;

    /* Tokens de uso */
    --bg-main: var(--ink);
    --bg-card: rgba(17, 33, 45, 0.75);
    --border-card: var(--mid);
    --primary: var(--areia);
    --primary-light: #E6CDA3;
    --primary-glow: rgba(219, 185, 134, 0.18);
    --accent: var(--muted);
    --text-main: var(--light);
    --text-muted: var(--muted);
  }

  body {
    background: radial-gradient(circle at 12% 0%, #11212D 0%, #06141B 55%) !important;
    background-color: var(--bg-main) !important;
    color: var(--text-main);
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  ::selection {
    background: var(--areia);
    color: var(--ink);
  }

  :focus-visible {
    outline: 2px solid var(--areia);
    outline-offset: 3px;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: var(--ink);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--mid);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--areia);
  }
`;

export default GlobalStyle;

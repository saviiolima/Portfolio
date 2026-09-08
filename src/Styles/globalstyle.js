import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  :root {
    --bg-main: #0B0F17;
    --bg-card: rgba(22, 31, 46, 0.75);
    --border-card: rgba(255, 255, 255, 0.08);
    --primary: #38bdf8;
    --primary-glow: rgba(56, 189, 248, 0.2);
    --accent: #818cf8;
    --text-main: #f1f5f9;
    --text-muted: #94a3b8;
  }

  body {
    background: radial-gradient(circle at 15% 15%, #131c2e 0%, #0b0f17 50%, #070a10 100%) !important;
    background-color: #0b0f17 !important;
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

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0b0f17;
  }
  ::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #334155;
  }
`;

export default GlobalStyle;

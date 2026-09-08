import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  :root {
    --bg-main: #06090c;
    --bg-card: rgba(13, 20, 24, 0.75);
    --border-card: rgba(255, 255, 255, 0.08);
    --primary: #10b981;
    --primary-light: #34d399;
    --primary-glow: rgba(16, 185, 129, 0.22);
    --accent: #06b6d4;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
  }

  body {
    background: radial-gradient(circle at 15% 15%, #0f1c1a 0%, #06090c 50%, #040608 100%) !important;
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

  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: #06090c;
  }
  ::-webkit-scrollbar-thumb {
    background: #1e293b;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #10b981;
  }
`;

export default GlobalStyle;

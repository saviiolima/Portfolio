import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/routes";
import GlobalStyle from "./Styles/globalstyle";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Analytics />
  </React.StrictMode>,
);

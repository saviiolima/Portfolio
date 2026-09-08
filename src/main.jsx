import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/routes.jsx";
import GlobalStyle from "./Styles/globalstyle.js";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Analytics />
  </React.StrictMode>,
);

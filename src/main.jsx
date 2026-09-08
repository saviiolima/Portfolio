import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Styles/globalstyle";
import Routes from "./Routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>
);

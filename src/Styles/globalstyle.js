import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto Mono", monospace;
    @import url('https://fonts.googleapis.com/css2?family=Raleway&family=Roboto+Mono&display=swap');
}
body {
    background: linear-gradient(68.15deg, #4e7367 16.62%, #22463c 85.61%);
}
`;

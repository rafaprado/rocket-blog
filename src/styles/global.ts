import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    line-height: 1.6;
  }

  input, textarea, body {
    font-size: 1.6rem;
    color: ${(props) => props.theme["base-text"]};
    font-family: "Nunito", sans-serif;
  }

  :focus {
    border: 0;
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }
`;

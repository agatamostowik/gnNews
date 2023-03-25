import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato', sans-serif;
    background-color: #F0F5F9;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color:inherit;
    text-decoration: none;
  }
`;

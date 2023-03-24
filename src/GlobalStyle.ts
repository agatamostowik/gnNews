import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  height:100%
}
body {
    height:100%;
    font-family: 'Lato', sans-serif;

  }
#root{
  min-height: 100%;
    display: flex;
    flex-direction: column;
}
ul,li{
  list-style: none;
}
`;

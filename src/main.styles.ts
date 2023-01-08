import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  * {
  font-family: 'Poppins', sans-serif;
  }

  body {
    padding: 0;
    background-color: #e1ebfb;
  }
`;

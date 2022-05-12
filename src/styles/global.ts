import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: none;
      outline: none;
  }

  body, html {
    font-family: ${({ theme }) => theme.FONTS.FAMILY.DEFAULT};
  }

  section {
    margin-bottom: 4rem;
  }

  a {
    text-decoration: none;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }

`;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0e0e0e;
opacity: 1;
background-image: radial-gradient(#1b1b1b 2px, #0e0e0e 2px);
background-size: 40px 40px;
  }
`

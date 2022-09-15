import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #100F0F;
    --box-bg-color: #414141;
    --red: #FF3C26;
    --green: #69D959;
    --yellow: #F2CE00;
    --orange: #FF7C17;
    --blue: #0071B7;
    --aqua-blue: #05A782;
    --text: #F5F5F5;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    user-select: none;
    cursor: default;
  }
  
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }
`
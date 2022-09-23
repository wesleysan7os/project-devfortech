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
    opacity: 0.9;
    background-image: radial-gradient(#242424 2px, #121212 2px);
    background-size: 40px 40px;
   
    /* background-size: cover; */
    -webkit-font-smoothing: antialiased;
  }

  body, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

    user-select: none;
    cursor: default;
  }
  
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: #157347;
  }

  a:hover {
      opacity: 0.8;
  }

  button{
    cursor: pointer;
  }

  /* width */
::-webkit-scrollbar {
  width: 0.8rem;
  background-color: #222222;

}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 7px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #565656;
  border-radius: 10px;
}
`

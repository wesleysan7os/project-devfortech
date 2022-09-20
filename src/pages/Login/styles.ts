import styled from 'styled-components'

export const StyledHeader = styled.header`
`

export const StyledContainer = styled.div`
  background-color: #2F2F33;
  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    section {
    border: 2px solid red;
    border-radius:  2%;
    padding: 2rem;
    }

  }

  div {
    display: flex;
    flex-direction: column;
  }

  footer {
   margin: 10px;
  }
`
export const StyledMain = styled.main`
`
export const StyledFooter = styled.footer`
`
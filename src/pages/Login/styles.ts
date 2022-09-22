import styled from 'styled-components'

export const StyledHeader = styled.header``

export const StyledContainer = styled.div`
  background-color: #2f2f33;
  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 20px;
  header {
    display: flex;
    gap: 1rem;
    color: #e6e6e6;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

    section {
      border: 2px solid #e6e6e6;
      border-radius: 2%;
      padding: 2rem;

      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      background-color: #e6e6e6;
      color: #157347;

      button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.3rem;
      }

      a {
        color: #157347;
      }

      @media (max-width: 900px) {
        gap: 0.5rem;
      }
    }

    aside {
      img {
        width: 43rem;

        @media (max-width: 1000px) {
          width: 33rem;
        }
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  footer {
    display: flex;
    justify-content: center;

    @media (max-width: 900px) {
      display: block;
      font-size: 10px;
    }
  }
`
export const StyledMain = styled.main``
export const StyledFooter = styled.footer``

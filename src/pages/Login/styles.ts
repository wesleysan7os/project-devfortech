import styled from 'styled-components'

export const LoginContainer = styled.div`
  .logo-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border: 1px solid red;
    width: 100%;
  }
`

export const StyledModalContainer = styled.div`
  .gama-logo {
    display: flex;
    justify-content: center;
    margin: 1rem;
  }

  .gama-logo img {
    width: 20rem;
    @media (max-width: 1000px) {
      width: 100%;
    }
  }

  background-color: #3c3c3c;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.35);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  color: white;
  a {
    color: #5bc83a;
    text-decoration: underline;
  }
  strong {
    font-weight: 1000;
  }

  .styled-card {
    background-color: rgb(38, 38, 38);
    color: white;
    width: 20rem;
    @media (max-width: 1000px) {
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 4px 0 4px 0;
    @media (max-width: 1000px) {
      font-size: 14px;
      flex-direction: column;
    }
  }

  @media (max-width: 1000px) {
    font-size: 14px;
    padding: 0;
  }
`

export const StyledContainer = styled.div`
  .about-project {
    position: fixed;
    top: 0.8rem;
    right: 0.8rem;
    opacity: 0.5;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  .about-project:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  background: rgb(38, 38, 38);
  background: linear-gradient(
    188deg,
    rgba(38, 38, 38, 0.6328419062937676) 0%,
    rgba(26, 26, 28, 0.9045505897671569) 36%,
    rgba(47, 47, 51, 1) 72%
  );

  background-size: cover;
  background-repeat: repeat;

  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  header {
    padding: 1rem;

    display: flex;
    align-items: center;

    color: #e6e6e6;
  }

  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    animation: slide-down 1000ms ease-out forwards;
    @keyframes slide-down {
      from {
        opacity: 0;
        transform: translateY(-5rem);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    aside {
      img {
        width: 43rem;

        @media (max-width: 1000px) {
          width: 33rem;
        }
      }

      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  section {
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.1);
    width: 28.125rem;
    border-radius: 2%;
    padding: 2rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border: 1px solid #565656;
    background-color: #414141;
    color: #e6e6e6;

    button {
      width: 100%;
      padding: 0.8rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.3rem;
    }

    @media (max-width: 900px) {
      gap: 0.5rem;
      padding: 1.5rem 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }

  footer {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      font-size: 14px;
      text-align: center;
    }
  }

  .contact-wrapper {
    display: flex;
    flex-direction: row;
  }

  .contact-wrapper a {
    border: 1px solid #383838;
    background-color: #272727;
    padding: 1rem;
    border-radius: 10px;
    margin: 5px;
    color: white;
    @media (max-width: 900px) {
      padding: 0.5rem;
    }
  }

  .login-input {
    width: 100%;
  }

  .login-input input {
    padding: 1rem;
    color: #f5f5f5;
    background-color: #414141;
  }
`

export const StyledMain = styled.main``
export const StyledFooter = styled.footer``

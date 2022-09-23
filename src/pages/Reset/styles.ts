import styled from 'styled-components'

export const StyledContainer = styled.div`
  .return-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    color: white;
  }

  background: rgb(38, 38, 38);
  background: linear-gradient(
    188deg,
    rgba(38, 38, 38, 0.6328419062937676) 0%,
    rgba(26, 26, 28, 0.9045505897671569) 36%,
    rgba(47, 47, 51, 1) 72%
  );
  width: 100vw;
  height: 100vh;
  color: #e6e6e6;

  display: flex;
  justify-content: center;
  align-items: center;

  section {
    width: 450px;
    border-radius: 2%;
    padding: 2rem 3rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    border: 1px solid #565656;
    background-color: #414141;
    color: #e6e6e6;

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
      padding: 1rem 2rem;
    }
  }

  .recover-input {
    width: 100%;
  }

  .recover-input input {
    padding: 1rem;
    color: #f5f5f5;
    background-color: #414141;
  }
`

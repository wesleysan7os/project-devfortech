import styled from 'styled-components'

export const Container = styled.section`
  color: #f5f5f5;
  background-color: #222;
  border-radius: 0.5rem;

  h5 {
    text-align: center;
    border-radius: 0.5rem;
    padding: 1rem;
    border: 1px solid #565656;
    background-color: #414141;
    margin: 0.6rem 0.7rem;
  }

  ul {
    font-size: 1.2rem;
    list-style-type: none;
    padding-left: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 0.5rem;
      padding: 0.5rem 3rem;
      border: 1px solid #565656;
      background-color: #414141;
      margin: 0.6rem 0.7rem;

      span {
        margin-left: 1rem;
      }

      @media (max-width: 550px) {
        padding: 0.5rem 2rem;
      }
    }
  }
`

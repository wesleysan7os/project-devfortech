import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1200px;
  margin: 0.8rem auto;
  padding: 0.7rem;
  border-radius: 0.5rem;
  background-color: #222;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

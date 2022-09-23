import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.4rem;
  max-width: 1200px;
  min-height: 500px;
  border-radius: 0.5rem;
  margin: 0 auto;

  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

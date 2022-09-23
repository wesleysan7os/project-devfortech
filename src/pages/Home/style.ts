import styled from 'styled-components'

export const GridContainer = styled.div`
  @media (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.18fr 1fr;
    grid-template-areas:
      'header'
      'main';

    .header {
      grid-area: header;
    }

    .main {
      grid-area: main;
    }
  }
`

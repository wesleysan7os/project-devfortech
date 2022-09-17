import styled from 'styled-components'

export const SummaryPieChartContainer = styled.div`
  background-color: #414141;
  margin: 0;
  padding: 0.7rem;
  border-radius: 0.5rem;
  color: white;
  width: 100%;
  display: flex;
  min-height: 50vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .piechart-labels {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 55%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .piechart-labels span {
    padding: 0.6rem;
    border-radius: 0.5rem;
    background-color: #4f4f4f;
    margin: 0.2rem 0;
    width: 100%;
    @media (max-width: 1024px) {
      padding: 0.3rem;
    }
  }
`

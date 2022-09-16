import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  height: 260px;
  max-width: 1400px;
  margin: 2rem auto 1rem;
  padding: 0.7rem;
  color: #F5F5F5;
  border-radius: 0.5rem;
  background-color: #222;
  grid-template-columns: 4fr 3fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 0.4rem;
  row-gap: 0.6rem;
  grid-template-areas:
    'transactions-summary transaction-modal'
    'transactions-summary line-chart';

    .transactions-summary {
    grid-area: transactions-summary;
    background-color: #414141;
  }

  .transaction-modal {
    grid-area: transaction-modal;
  }

  .line-chart {
    grid-area: line-chart;
    background-color: #414141;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'transactions-summary'
      'transaction-modal'
      'line-chart';
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'transactions-summary'
      'transaction-modal';

    .line-chart {
      display: none;
    }
  }
`

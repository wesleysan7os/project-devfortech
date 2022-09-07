import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: grid;
  height: 260px;
  padding: 0.7rem;
  border-radius: 0.5rem;
  background-color: #222;
  grid-template-columns: 4fr 5fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.4rem;
  grid-template-areas:
    'transactions-summary transaction-modal'
    'transactions-summary line-chart';

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f5f5f5;
    font-weight: bold;
    font-size: larger;
    background-color: #414141;
    border-radius: 0.5rem;
  }

  .transactions-summary {
    grid-area: transactions-summary;
  }

  .transaction-modal {
    grid-area: transaction-modal;
  }

  .line-chart {
    grid-area: line-chart;
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

import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr 1fr;
  background-color: #222;
  column-gap: 0.4rem;
  row-gap: 0.6rem;
  grid-template-areas:
    'summary income'
    'summary outcome';

  .summary {
    border: 1px solid #565656;
    grid-area: summary;
  }

  .income {
    grid-area: income;

    span {
      color: #69d959;
    }
  }

  .outcome {
    grid-area: outcome;

    span {
      color: #ff3c26;
    }
  }

  main {
    background-color: #414141;

    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;

    .summaryBlur {
      color: transparent;
      text-shadow: 0 0 11px rgba(255, 255, 255, 0.5);
    }

    header {
      margin-bottom: 4rem;
    }

    h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: normal;
      font-size: 1.3rem;
    }

    section button {
      background-color: transparent;
      color: #f5f5f5;
      border: none;
    }
  }

  & > section {
    border: 4px solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 7.1rem;
    border: 1px solid #565656;
    background-color: #414141;
    border-radius: 0.5rem;
    padding-left: 1rem;

    .incomeBlur {
      color: transparent;
      text-shadow: 0 0 8px rgb(105, 217, 89);
    }

    .outcomeBlur {
      color: transparent;
      text-shadow: 0 0 8px rgb(255, 60, 38);
    }

    h4 {
      font-weight: normal;
    }

    span {
      font-size: 1.4rem;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

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
    grid-area: summary;
  }
  
  .income {
    grid-area: income;

    span {
      color: #69D959;
      color: transparent;
      text-shadow: 0 0 7px rgb(105, 217, 89);
    }
  }

  .outcome {
    grid-area: outcome;

    span {
      color: #FF3C26;
      color: transparent;
      text-shadow: 0 0 7px rgb(255, 60, 38);
    }
  }

  main {
    background-color: #414141;
    border-radius: 0.5rem;
    padding: 0.5rem 1.5rem;

    header {
      margin-bottom: 4rem;
    }

    h4 {
      display: flex;
      justify-content: space-between;
      font-weight: normal;
      font-size: 1.3rem;
    }

    section h2 {
      color: transparent;
      text-shadow: 0 0 9px rgba(255, 255, 255, 0.5);
    }
  }

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 7.1rem;
    background-color: #414141;
    border-radius: 0.5rem;
    padding-left: 1rem;

    h4 {
      font-weight: normal;
    }

    span {
      font-size: 1.4rem;
      font-weight: bold;
      white-space:nowrap;
    }
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

`
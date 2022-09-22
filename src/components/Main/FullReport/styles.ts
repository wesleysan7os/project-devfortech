import styled from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 0.4rem;
  max-width: 1200px;
  min-height: 500px;
  margin: 0.5rem auto;

  input,
  input:focus,
  select {
    color: #f5f5f5;
    border: 1px solid #565656;
    background-color: #414141;
    font-size: 1rem;
  }

  .report-container {
    background-color: #222;
    border-radius: 0.5rem;
    color: #eeee;
    overflow: hidden;

    min-height: 500px;
  }

  .report-container h5 {
    text-align: center;
    border-radius: 0.5rem;
    padding: 1rem;
    background-color: #414141;
    margin: 0.6rem 0.7rem;
  }

  .filter-container {
    display: flex;
    justify-content: flex-start;

    margin: 0.6rem 0.7rem;
  }

  .filter-option {
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
    width: 200px;
  }

  .list {
    width: 100%;
    padding-left: 0;
    list-style-type: none;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 500px;
  }

  .list li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem;
    margin: 10px;
    border-radius: 0.5rem;

    border: 1px solid #565656;
    background-color: #414141;
  }

  .list li:hover {
    background-color: #565656;
  }

  li .info-value {
    font-size: 18px;
    width: 150px;
  }

  li .primary {
    width: 150px;
    display: flex;
    align-items: center;
  }

  li .transaction-title {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  li .secondary {
    width: 200px;
    color: #9b9b9b;
  }

  li .date {
    text-align: center;
  }

  .actions {
    width: 90px;
    visibility: hidden;
  }

  .list li:hover .actions {
    visibility: visible;
  }
`

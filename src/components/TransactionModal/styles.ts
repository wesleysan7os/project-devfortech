import styled from 'styled-components'
import { Modal } from 'react-bootstrap'

export const Container = styled.main`
  background-color: #323131;
  color: #f5f5f5;
  border-radius: 8px;
  padding: 1.25rem 2rem;

  input,
  input:focus,
  select {
    color: #f5f5f5;
    background-color: #414141;
  }

  .close-button {
    color: #f5f5f5;
    background-color: transparent;
    border: none;
  }
`
export const ButtonDiv = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: center;
`

export const ErrorSpan = styled.span`
  margin: 5px 0;
  color: tomato;
  font-size: 14px;
`

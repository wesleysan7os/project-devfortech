import styled from 'styled-components'

interface ButtonProps {
  borderColor: 'lightgreen' | 'orangered' | 'yellow'
}

export const Container = styled.div`
  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #414141;
    border-radius: 0.5rem;
    padding: 0.4rem;
  }

  .report {
    padding: 1rem 3rem;
    min-height: 100px;
    min-width: 100px;
  }
`
export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  color: #f5f5f5;
  background-color: #414141;
  border-width: 3px;
  border-style: solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  word-spacing: 2.5rem;
  padding: 0 1rem;
  max-width: 200px;
  max-height: 100px;

  transition: 0.2s ease-in-out 0s;

  &:hover {
    transform: scale(0.97);
  }

  @media (max-width: 550px) {
    font-size: 1rem;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-spacing: 3.8rem;
  }
`

import styled from 'styled-components'

export const TransactionsContainer = styled.section`
  /* width: 100%; */
  max-width: 1200px;
  margin: 4rem auto 0;
  /* margin: 0 auto; */
  /* padding: 0 1.5rem; */

  color: #fff;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate; //assim eu posso usar o border-spacing
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; //testar */
  background-color: var(--shadow);
  padding: 20px;

  thead {
    text-align: center;
  }

  td {
    padding: 0.2rem 2rem;
    background: var(--box-bg-color);

    // primeira td de cada linha
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${props => props.variant === 'income' 
    ? props.theme['green-300']
    : props.theme['red-300']}
`
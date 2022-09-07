import { StyledHeader } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <div className="transactions-summary">Transactions Summary</div>
      <div className="transaction-modal">Transaction Modal</div>
      <div className="line-chart">Line Chart</div>
    </StyledHeader>
  )
}

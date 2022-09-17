import { AddTransactionsArea } from './AddTransactionsArea'
import { TransactionsSummary } from './TransactionsSummary'
import { LineChartTotal } from './LineChart'
import { StyledHeader } from './styles'

export function Header() {
  return (
    <StyledHeader>
      <div className="transactions-summary">
        <TransactionsSummary />
      </div>
      <div className="transaction-modal">
        <AddTransactionsArea />
      </div>
      <div className="line-chart">
        <LineChartTotal />
      </div>
    </StyledHeader>
  )
}

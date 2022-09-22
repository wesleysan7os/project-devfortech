import { AddTransactionsArea } from './AddTransactionsArea'
import { TransactionsSummary } from './TransactionsSummary'
import { LineChartTotal } from './LineChart'
import { StyledHeader } from './styles'

export type HeaderProps = {
  userName: string,
}

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <div className="transactions-summary">
        <TransactionsSummary userName={props.userName}/>
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

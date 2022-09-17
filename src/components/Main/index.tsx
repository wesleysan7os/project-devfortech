import { ExpensesByCategory } from './ExpensesByCategory'
import { SummaryPieChart } from './SummaryPieChart'
import { Container } from './styles'

export function Main() {
  return (
    <Container>
      <ExpensesByCategory />
      <SummaryPieChart />
    </Container>
  )
}

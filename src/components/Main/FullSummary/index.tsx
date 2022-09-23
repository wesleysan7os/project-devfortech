import { ExpensesByCategory } from '../ExpensesByCategory'
import { SummaryPieChart } from '../SummaryPieChart'
import { Container } from '../styles'

export function FullSummary() {
  return (
    <Container>
      <ExpensesByCategory />
      <SummaryPieChart />
    </Container>
  )
}

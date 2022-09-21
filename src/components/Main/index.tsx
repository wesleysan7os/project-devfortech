import { ExpensesByCategory } from './ExpensesByCategory'
import { SummaryPieChart } from './SummaryPieChart'
import { Container } from './styles'
import { FullReport } from './FullReport'

export function Main() {
  return (
    <>
      <FullReport />
      <Container>
        <ExpensesByCategory />
        <SummaryPieChart />
      </Container>
    </>
  )
}

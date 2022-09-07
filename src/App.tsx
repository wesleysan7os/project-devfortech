import { Container, Header } from './styles/global'

export function App() {
  return (
    <Container>
      <Header>
        <div className="summary-transaction"></div>
        <div className="transaction-modal"></div>
        <div className="line-chart"></div>
      </Header>
    </Container>
  )
}

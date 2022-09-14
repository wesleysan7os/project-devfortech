import { Header } from './components/Header'
import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <TransactionsProvider>
      <Header />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
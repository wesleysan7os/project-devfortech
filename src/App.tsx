import { Header } from './components/Header'
import Main from './components/Main'
import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <TransactionsProvider>
      <Header />
      <Main />
      <GlobalStyle />
    </TransactionsProvider>
  )
}
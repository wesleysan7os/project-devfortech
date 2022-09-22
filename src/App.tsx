import { TransactionsProvider } from './hooks/useTransactions'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { GridContainer } from './style'

export function App() {
  return (
    <TransactionsProvider>
      <AppRoutes />
      <GridContainer>
        <div className="header">
          <Header userName="Wesley" />
        </div>
        <div className="main">
          <Main />
        </div>
      </GridContainer>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{
          backgroundColor: '#414141',
          color: '#ccc',
          boxShadow: '2px 13px 12px 2px rgba(0,0,0,0.46)',
        }}
      />
    </TransactionsProvider>
  )
}

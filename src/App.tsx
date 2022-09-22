import { TransactionsProvider } from './hooks/useTransactions'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { AppRoutes } from './routes'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <TransactionsProvider>
      <AppRoutes />
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

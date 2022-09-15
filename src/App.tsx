import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Main from './components/Main'

export function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={1500}
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
    </>
  )
}

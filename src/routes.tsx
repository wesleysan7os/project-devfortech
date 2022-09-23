import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Reset } from './pages/Reset'
import { Home } from './pages/Home'
import { FullSummary } from './components/Main/FullSummary'
import { FullReport } from './components/Main/FullReport'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="" element={<FullSummary />} />
          <Route path="report" element={<FullReport />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  )
}

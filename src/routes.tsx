import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
import Register from "./components/Register"
import { Reset } from "./components/Reset"
import { Home } from "./pages/Home"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Reset } from "./pages/Reset"
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
import { useEffect } from "react"

export function App() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  })
  return (
    <div className="App">
      <h3>Grupo 4</h3>
    </div>
  )
}

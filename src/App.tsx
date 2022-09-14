import { LineChartTotal } from "./components/LineChart"

import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

export function App() {
  const demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v'

  return (
    <>
      <Header />
      <GlobalStyle />

      <LineChartTotal />
    </>
  )
}

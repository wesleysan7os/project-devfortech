import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { useTransactions } from '../../../hooks/useTransactions'
import { formatDate } from '../../../utils/generalFunctions'

export function LineChartTotal() {
  const { transactions } = useTransactions()
  
  const data = transactions.reduce(
    (acc, transaction) => {
      console.log('DATA AQUI',transaction.createdAt)
      if (Number(formatDate(transaction.createdAt).slice(3,5)) == 1) {
        if (transaction.type === 'deposit') {
          acc[0].Entradas += transaction.amount
          acc[0].total += transaction.amount
        } else {
          acc[0].Saídas += transaction.amount
          acc[0].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 2) {
        if (transaction.type === 'deposit') {
          acc[1].Entradas += transaction.amount
          acc[1].total += transaction.amount
        } else {
          acc[1].Saídas += transaction.amount
          acc[1].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 3) {
        if (transaction.type === 'deposit') {
          acc[2].Entradas += transaction.amount
          acc[2].total += transaction.amount
        } else {
          acc[2].Saídas += transaction.amount
          acc[2].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 4) {
        if (transaction.type === 'deposit') {
          acc[3].Entradas += transaction.amount
          acc[3].total += transaction.amount
        } else {
          acc[3].Saídas += transaction.amount
          acc[3].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 5) {
        if (transaction.type === 'deposit') {
          acc[4].Entradas += transaction.amount
          acc[4].total += transaction.amount
        } else {
          acc[4].Saídas += transaction.amount
          acc[4].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 6) {
        if (transaction.type === 'deposit') {
          acc[5].Entradas += transaction.amount
          acc[5].total += transaction.amount
        } else {
          acc[5].Saídas += transaction.amount
          acc[5].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 7) {
        if (transaction.type === 'deposit') {
          acc[7].Entradas += transaction.amount
          acc[7].total += transaction.amount
        } else {
          acc[7].Saídas += transaction.amount
          acc[7].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 8) {
        if (transaction.type === 'deposit') {
          acc[7].Entradas += transaction.amount
          acc[7].total += transaction.amount
        } else {
          acc[7].Saídas += transaction.amount
          acc[7].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 9) {
        if (transaction.type === 'deposit') {
          acc[8].Entradas += transaction.amount
          acc[8].total += transaction.amount
        } else {
          acc[8].Saídas += transaction.amount
          acc[8].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 10) {
        if (transaction.type === 'deposit') {
          acc[9].Entradas += transaction.amount
          acc[9].total += transaction.amount
        } else {
          acc[9].Saídas += transaction.amount
          acc[9].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 11) {
        if (transaction.type === 'deposit') {
          acc[10].Entradas += transaction.amount
          acc[10].total += transaction.amount
        } else {
          acc[10].Saídas += transaction.amount
          acc[10].total -= transaction.amount
        }
      }
      if (Number(formatDate(transaction.createdAt).slice(3,5)) + 1 == 12) {
        if (transaction.type === 'deposit') {
          acc[11].Entradas += transaction.amount
          acc[11].total += transaction.amount
        } else {
          acc[11].Saídas += transaction.amount
          acc[11].total -= transaction.amount
        }
      }

      return acc
    },
    [
      { name: 'Jan', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Fev', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Mar', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Abr', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Mai', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Jun', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Jul', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Ago', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Set', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Out', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Nov', Entradas: 0, Saídas: 0, total: 0 },
      { name: 'Dez', Entradas: 0, Saídas: 0, total: 0 },
    ],
  )
  const contentStyle = {
    backgroundColor: 'rgba(65,65,65,0.5)',
    
  }
  const wrapperStyle = {
    border: 'none'
  }
  return (
    <LineChart
      width={640}
      height={110}
      data={data}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip wrapperStyle={wrapperStyle} contentStyle={contentStyle} />
      <Line type="monotone" dataKey="Saídas" stroke="#FF3C26" />
      <Line type="monotone" dataKey="Entradas" stroke="#69D959" />
    </LineChart>
  )
}

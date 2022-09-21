import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useTransactions } from '../../../hooks/useTransactions'
import { dateFormat } from '../../../utils/dateFormat'

// const data = [
//   {
//     name: 'jan/2022',
//     receita: 4000,
//     despesa: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'fev/2022',
//     receita: 3000,
//     despesa: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'mar/2022',
//     receita: 2000,
//     despesa: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'mai/2022',
//     receita: 2780,
//     despesa: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'jun/2022',
//     receita: 1890,
//     despesa: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'jul/2022',
//     receita: 2390,
//     despesa: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'ago/2022',
//     receita: 3490,
//     despesa: 4300,
//     amt: 2100,
//   },
//   {
//     id: 'LULGGdoujTKn9t1YHMzy',
//     title: 'Aluguel',
//     type: 'withdraw',
//     category: 'Extra',
//     amount: 800,
//     createdAt: { seconds: 1663093594, nanoseconds: 347000000 },
//   },
// ]

export function LineChartTotal() {
  const { transactions } = useTransactions()

  const data = transactions.reduce(
    (acc, transaction) => {
      if (dateFormat(transaction.createdAt)?.getMonth() == 1) {
        if (transaction.type === 'deposit') {
          acc[0].Entradas += transaction.amount
          acc[0].total += transaction.amount
        } else {
          acc[0].Saídas += transaction.amount
          acc[0].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 2) {
        if (transaction.type === 'deposit') {
          acc[1].Entradas += transaction.amount
          acc[1].total += transaction.amount
        } else {
          acc[1].Saídas += transaction.amount
          acc[1].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 3) {
        if (transaction.type === 'deposit') {
          acc[2].Entradas += transaction.amount
          acc[2].total += transaction.amount
        } else {
          acc[2].Saídas += transaction.amount
          acc[2].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 4) {
        if (transaction.type === 'deposit') {
          acc[3].Entradas += transaction.amount
          acc[3].total += transaction.amount
        } else {
          acc[3].Saídas += transaction.amount
          acc[3].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 5) {
        if (transaction.type === 'deposit') {
          acc[4].Entradas += transaction.amount
          acc[4].total += transaction.amount
        } else {
          acc[4].Saídas += transaction.amount
          acc[4].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 6) {
        if (transaction.type === 'deposit') {
          acc[5].Entradas += transaction.amount
          acc[5].total += transaction.amount
        } else {
          acc[5].Saídas += transaction.amount
          acc[5].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 7) {
        if (transaction.type === 'deposit') {
          acc[7].Entradas += transaction.amount
          acc[7].total += transaction.amount
        } else {
          acc[7].Saídas += transaction.amount
          acc[7].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 8) {
        if (transaction.type === 'deposit') {
          acc[7].Entradas += transaction.amount
          acc[7].total += transaction.amount
        } else {
          acc[7].Saídas += transaction.amount
          acc[7].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 9) {
        if (transaction.type === 'deposit') {
          acc[8].Entradas += transaction.amount
          acc[8].total += transaction.amount
        } else {
          acc[8].Saídas += transaction.amount
          acc[8].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 10) {
        if (transaction.type === 'deposit') {
          acc[9].Entradas += transaction.amount
          acc[9].total += transaction.amount
        } else {
          acc[9].Saídas += transaction.amount
          acc[9].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 11) {
        if (transaction.type === 'deposit') {
          acc[10].Entradas += transaction.amount
          acc[10].total += transaction.amount
        } else {
          acc[10].Saídas += transaction.amount
          acc[10].total -= transaction.amount
        }
      }
      if (dateFormat(transaction.createdAt)?.getMonth() + 1 == 12) {
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

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

const data = [
  {
    name: 'jan/2022',
    receita: 4000,
    despesa: 2400,
    amt: 2400,
  },
  {
    name: 'fev/2022',
    receita: 3000,
    despesa: 1398,
    amt: 2210,
  },
  {
    name: 'mar/2022',
    receita: 2000,
    despesa: 9800,
    amt: 2290,
  },
  {
    name: 'mai/2022',
    receita: 2780,
    despesa: 3908,
    amt: 2000,
  },
  {
    name: 'jun/2022',
    receita: 1890,
    despesa: 4800,
    amt: 2181,
  },
  {
    name: 'jul/2022',
    receita: 2390,
    despesa: 3800,
    amt: 2500,
  },
  {
    name: 'ago/2022',
    receita: 3490,
    despesa: 4300,
    amt: 2100,
  },
]

export function LineChartTotal() {
  return (
    <LineChart
      width={640}
      height={110}
      data={data}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="name" /> */}
      {/* <YAxis /> */}
      <Tooltip />
      {/* <Legend /> */}
      <Line type="monotone" dataKey="despesa" stroke="#FF3C26" />
      <Line type="monotone" dataKey="receita" stroke="#69D959" />
    </LineChart>
  )
}

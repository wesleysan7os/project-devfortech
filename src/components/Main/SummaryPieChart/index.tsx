import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTransactions } from '../../../hooks/useTransactions'

import { SummaryPieChartContainer } from './styles'

const data = [
  { name: 'Alimentação', value: 700 },
  { name: 'Academia', value: 300 },
  { name: 'Saúde', value: 300 },
  { name: 'Investimentos', value: 200 },
  { name: 'Pets', value: 300 },
  { name: 'Educação', value: 300 },
  { name: 'Extra', value: 125 },
  { name: 'Transporte', value: 450 },
]

const COLORS = [
  '#FF3C26',
  '#69D959',
  '#05A782',
  '#F2CE00',

  '#0071B7',
  '#C90132',
]

const RADIAN = Math.PI / 180

type PieChartProps = {
  cx: string
  cy: string
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
}

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: PieChartProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export function SummaryPieChart() {
  const { categories } = useTransactions()

  return (
    <SummaryPieChartContainer>
      <ResponsiveContainer>
        <PieChart width={300} height={450}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            innerRadius={40}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="piechart-labels">
        {categories.map((category) => {
          if (!!category.name) {
            return <span key={category.id}>{category.name}</span>
          }
        })}
      </div>
    </SummaryPieChartContainer>
  )
}

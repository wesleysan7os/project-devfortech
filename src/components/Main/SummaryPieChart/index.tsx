import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Text,
} from 'recharts'
import { useTransactions } from '../../../hooks/useTransactions'

import { LabelColor, StyledTooltip, SummaryPieChartContainer } from './styles'

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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <Text
      style={{ fontSize: '20px', textShadow: '1px 1px 2px black' }}
      x={x}
      y={y}
      fill="white"
      textAnchor={'middle'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </Text>
  )
}

export function SummaryPieChart() {
  const { categories, transactions } = useTransactions()

  function getTotalAmountByCategory(category: string) {
    return transactions
      .filter((tr) => tr.type === 'withdraw' && tr.category === category)
      .reduce((acc, obj) => acc + obj.amount, 0)
  }

  const COLORS = categories
    .filter((cat) => !!cat.name && getTotalAmountByCategory(cat.name) > 0)
    .map((category) => {
      return category.color
    })

  const data = categories
    .filter((cat) => !!cat.name && getTotalAmountByCategory(cat.name) > 0)
    .map((cat) => {
      return { name: cat.name, value: getTotalAmountByCategory(cat.name) }
    })

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <StyledTooltip>
          <div className="tooltip-info">
            <span className="info-title">Categoria</span>
            <span className="info-value">{payload[0].name}</span>
          </div>
          <div className="tooltip-info">
            <span className="info-title">Quantia</span>
            <span className="info-value">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(payload[0].value)}
            </span>
          </div>
        </StyledTooltip>
      )
    }

    return null
  }

  return (
    <SummaryPieChartContainer>
      <h5>Resumo Despesas - Últimos 30 dias</h5>
      <div className="flex-row">
        <ResponsiveContainer>
          <PieChart width={300} height={450}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={170}
              innerRadius={0}
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
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="piechart-labels">
          {categories.map((category) => {
            if (!!category.name) {
              return (
                <div className="label" key={category.id}>
                  <LabelColor color={category.color} />
                  <span>{category.name}</span>
                </div>
              )
            }
          })}
        </div>
      </div>
    </SummaryPieChartContainer>
  )
}

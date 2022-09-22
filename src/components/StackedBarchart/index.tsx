import { render } from '@testing-library/react'
import { TrendDown, TrendUp } from 'phosphor-react'

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { useTransactions } from '../../hooks/useTransactions'
import { getCurrentYear } from '../../utils/generalFunctions'
import { BarchartContainer, StyledTooltip } from './styles'

export function StackedBarchart() {
  const { transactions } = useTransactions()

  function calcMonthlyTransactions(type: string, month: string) {
    const monthlyExpense = transactions
      .filter((tr) => {
        let transactionMonth = String(tr.createdAt).split('-')[1]

        let transactionYear = String(tr.createdAt).split('T')[0].split('-')[0]

        return (
          tr.type === type &&
          transactionMonth === month &&
          transactionYear === getCurrentYear() &&
          tr
        )
      })
      .reduce((acc, tr) => acc + tr.amount, 0)

    return monthlyExpense
  }

  const data = [
    {
      name: 'Jan',
      Receitas: calcMonthlyTransactions('deposit', '01'),
      Despesas: calcMonthlyTransactions('withdraw', '01'),
    },
    {
      name: 'Fev',
      Receitas: calcMonthlyTransactions('deposit', '02'),
      Despesas: calcMonthlyTransactions('withdraw', '02'),
    },
    {
      name: 'Mar',
      Receitas: calcMonthlyTransactions('deposit', '03'),
      Despesas: calcMonthlyTransactions('withdraw', '03'),
    },
    {
      name: 'Abr',
      Receitas: calcMonthlyTransactions('deposit', '04'),
      Despesas: calcMonthlyTransactions('withdraw', '04'),
    },
    {
      name: 'Mai',
      Receitas: calcMonthlyTransactions('deposit', '05'),
      Despesas: calcMonthlyTransactions('withdraw', '05'),
    },
    {
      name: 'Jun',
      Receitas: calcMonthlyTransactions('deposit', '06'),
      Despesas: calcMonthlyTransactions('withdraw', '06'),
    },
    {
      name: 'Jul',
      Receitas: calcMonthlyTransactions('deposit', '07'),
      Despesas: calcMonthlyTransactions('withdraw', '07'),
    },
    {
      name: 'Ago',
      Receitas: calcMonthlyTransactions('deposit', '08'),
      Despesas: calcMonthlyTransactions('withdraw', '08'),
    },
    {
      name: 'Set',
      Receitas: calcMonthlyTransactions('deposit', '09'),
      Despesas: calcMonthlyTransactions('withdraw', '09'),
    },
    {
      name: 'Out',
      Receitas: calcMonthlyTransactions('deposit', '10'),
      Despesas: calcMonthlyTransactions('withdraw', '10'),
    },
    {
      name: 'Nov',
      Receitas: calcMonthlyTransactions('deposit', '11'),
      Despesas: calcMonthlyTransactions('withdraw', '11'),
    },
    {
      name: 'Dez',
      Receitas: calcMonthlyTransactions('deposit', '12'),
      Despesas: calcMonthlyTransactions('withdraw', '12'),
    },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <StyledTooltip
          isGeneralBalancePositive={
            payload[0].value - payload[1].value > 0 ? true : false
          }
        >
          <h6>
            {label}/{getCurrentYear()}
          </h6>

          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className="tooltip-info">
              <span className="info-value">
                <TrendUp style={{ color: '#7AC57A', marginRight: '5px' }} />
                {payload[0].name}
              </span>
            </div>
            <div className="tooltip-info">
              <span className="info-value">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(payload[0].value)}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="tooltip-info">
              <span className="info-value">
                <TrendDown style={{ color: 'tomato', marginRight: '5px' }} />
                {payload[1].name}
              </span>
            </div>
            <div className="tooltip-info">
              <span className="info-value">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(payload[1].value)}
              </span>
            </div>
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div className="tooltip-info">
              <span className="info-value">Saldo geral</span>
            </div>
            <div className="tooltip-info">
              <span className="info-value general-balance">
                {' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(payload[0].value - payload[1].value)}
              </span>
            </div>
          </div>
        </StyledTooltip>
      )
    } else {
      return null
    }
  }

  return (
    <BarchartContainer>
      <h5>Resumo Anual - {getCurrentYear()}</h5>
      <BarChart
        width={500}
        height={550}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
        <XAxis dataKey="name" />

        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#303030' }} />
        <Legend />
        <Bar dataKey="Receitas" stackId="a" fill="rgba(144, 238, 144, 0.8)" />
        <Bar dataKey="Despesas" stackId="a" fill="rgba(255, 69, 0, 0.8)" />
      </BarChart>
    </BarchartContainer>
  )
}

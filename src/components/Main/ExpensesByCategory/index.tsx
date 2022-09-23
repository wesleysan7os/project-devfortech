import {
  Barbell,
  Car,
  Dog,
  Gift,
  GraduationCap,
  Hamburger,
  Heartbeat,
  TrendUp,
} from 'phosphor-react'

import { useTransactions } from '../../../hooks/useTransactions'
import { checkDateRange } from '../../../utils/generalFunctions'
import { Container } from './styles'
import { useEffect } from 'react'

interface Expenses {
  food: number
  gym: number
  health: number
  investiments: number
  pets: number
  education: number
  transports: number
  extra: number
}

type ExpensesKeys =
  | 'food'
  | 'gym'
  | 'health'
  | 'investiments'
  | 'pets'
  | 'education'
  | 'transports'
  | 'extra'

export function ExpensesByCategory() {
  const { transactions } = useTransactions()

  const expensesByCategory = {} as Expenses

  function calculateExpensesByCategory(
    key: ExpensesKeys,
    categoryName: string,
  ) {
    expensesByCategory[key] = transactions
      .filter((tr) => {
        if (
          checkDateRange(new Date(tr.createdAt), 7) &&
          tr.type === 'withdraw' &&
          tr.category === categoryName
        ) {
          return tr
        }
      })
      .reduce((acc, transaction) => {
        if (
          transaction.type === 'withdraw' &&
          transaction.category === categoryName
        ) {
          acc += transaction.amount
        }
        return acc
      }, 0)
  }

  function format(expense: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(expense)
  }

  calculateExpensesByCategory('food', 'Alimentação')
  calculateExpensesByCategory('gym', 'Academia')
  calculateExpensesByCategory('health', 'Saúde')
  calculateExpensesByCategory('investiments', 'Investimentos')
  calculateExpensesByCategory('pets', 'Pets')
  calculateExpensesByCategory('education', 'Educação')
  calculateExpensesByCategory('transports', 'Transporte')
  calculateExpensesByCategory('extra', 'Extra')

  useEffect(() => {
    calculateExpensesByCategory('food', 'Alimentação')
    calculateExpensesByCategory('gym', 'Academia')
    calculateExpensesByCategory('health', 'Saúde')
    calculateExpensesByCategory('investiments', 'Investimentos')
    calculateExpensesByCategory('pets', 'Pets')
    calculateExpensesByCategory('education', 'Educação')
    calculateExpensesByCategory('transports', 'Transporte')
    calculateExpensesByCategory('extra', 'Extra')
  }, [transactions])

  return (
    <Container>
      <h5>Resumo Gastos Últimos 7 dias</h5>
      <ul>
        <li>
          <div>
            <Hamburger size={32} weight="bold" color="#FF3C26" />
            <span>Alimentação</span>
          </div>
          {format(expensesByCategory.food)}
        </li>
        <li>
          <div>
            <Barbell size={32} weight="bold" color="#69D959" />
            <span>Academia</span>
          </div>
          {format(expensesByCategory.gym)}
        </li>
        <li>
          <div>
            <Heartbeat size={32} weight="bold" color="#05A782" />
            <span>Saúde</span>
          </div>
          {format(expensesByCategory.health)}
        </li>
        <li>
          <div>
            <TrendUp size={32} weight="bold" color="#F2CE00" />
            <span>Investimentos</span>
          </div>
          {format(expensesByCategory.investiments)}
        </li>
        <li>
          <div>
            <Dog size={32} weight="bold" color="#FF7C17" />
            <span>Pets</span>
          </div>
          {format(expensesByCategory.pets)}
        </li>
        <li>
          <div>
            <GraduationCap size={32} weight="bold" color="#0071B7" />
            <span>Educação</span>
          </div>
          {format(expensesByCategory.education)}
        </li>
        <li>
          <div>
            <Car size={32} weight="bold" color="#EFEAEA" />
            <span>Transporte</span>
          </div>
          {format(expensesByCategory.transports)}
        </li>
        <li>
          <div>
            <Gift size={32} weight="bold" color="#C90132" />
            <span>Extra</span>
          </div>
          {format(expensesByCategory.extra)}
        </li>
      </ul>
    </Container>
  )
}

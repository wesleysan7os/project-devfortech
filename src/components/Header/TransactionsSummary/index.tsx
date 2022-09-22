import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUp, Eye, EyeClosed, SignOut } from 'phosphor-react'

import { Container } from './styles'
import { useTransactions } from '../../../hooks/useTransactions'
import { logout } from '../../../services/firebase'
import { HeaderProps } from '..'
import { Loading } from '../../Loading/Loading'

export function TransactionsSummary(props: HeaderProps) {
  const { transactions } = useTransactions()
  const [showTransactionsSummary, setShowTransactionsSummary] = useState(false)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )

  return (
    <Container>
      <main className="summary">
        <header>
          <h2>Olá 🤑</h2>
          <h4>{props.userName}
            <span onClick={logout} title="Sair">
              {props.userName ? (
                <SignOut size={32} weight="thin" />
              ) : (
                <Loading />
              )}
            </span></h4>
        </header>
        <section>
          <h4>
            Saldo Geral
            <button
              onClick={() =>
                setShowTransactionsSummary(!showTransactionsSummary)
              }
            >
              {showTransactionsSummary ? (
                <Eye size={32} weight="thin" />
              ) : (
                <EyeClosed size={32} weight="thin" />
              )}
            </button>
          </h4>
          <h2 className={showTransactionsSummary ? '' : 'summaryBlur'}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.total)}
          </h2>
        </section>
      </main>
      <section className="income">
        <div>
          <h4>Entradas</h4>
          <span className={showTransactionsSummary ? '' : 'incomeBlur'}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.deposits)}
          </span>
        </div>
        <ArrowUp size={80} weight="thin" color="lightgreen" />
      </section>
      <section className="outcome">
        <div>
          <h4>Saídas</h4>
          <span className={showTransactionsSummary ? '' : 'outcomeBlur'}>
            -{' '}
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.withdraws)}
          </span>
        </div>
        <ArrowDown size={80} weight="thin" color="red" />
      </section>
    </Container>
  )
}

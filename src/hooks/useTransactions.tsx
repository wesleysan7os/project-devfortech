import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-toastify'

import { api } from '../services/api'

export interface Transaction {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  category:
    | ''
    | 'Alimentação'
    | 'Academia'
    | 'Saúde'
    | 'Investimentos'
    | 'Pets'
    | 'Educação'
    | 'Transporte'
    | 'Extra'
  amount: number
  createdAt: Date
}

type TransactionInput = Omit<Transaction, 'id'>

interface Categories {
  id: number
  name:
    | ''
    | 'Alimentação'
    | 'Academia'
    | 'Saúde'
    | 'Investimentos'
    | 'Pets'
    | 'Educação'
    | 'Transporte'
    | 'Extra'
  color: string
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  categories: Categories[]
  createTransaction: (transactionInput: TransactionInput) => Promise<void>
  deleteTransaction: (transactionId: number) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [categories, setCategories] = useState<Categories[]>([])

  useEffect(() => {
    const fetchData = async () => {
      api
        .get('transactions')
        .then((response) => setTransactions(response.data.transactions))

      api
        .get('categories')
        .then((response) => setCategories(response.data.categories))
    }

    fetchData()
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput)

    const { transactions: transaction } = response.data
    setTransactions(() => [...transactions, transaction])
  }
  async function deleteTransaction(transactionId: number) {
    const deletedTransaction = transactions.find((tr) => tr.id == transactionId)

    console.log(deletedTransaction)

    const response = await api.delete(`/transactions/${transactionId}`)

    console.log('RESPOSTA:', response)

    const transactionsAfterDelete = transactions.filter((transaction) => {
      return transaction.id != transactionId
    })

    setTransactions(transactionsAfterDelete)

    toast.success(
      `${deletedTransaction!.type === 'deposit' ? 'Receita' : 'Despesa'} "${
        deletedTransaction!.title
      }" foi excluída.`,
    )
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, categories, createTransaction, deleteTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../services/api'

interface Transaction {
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

type TransactionInput = Omit<Transaction, 'createdAt' | 'id'>

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

  return (
    <TransactionsContext.Provider
      value={{ transactions, categories, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

import { api } from '../services/api'
import { auth } from '../services/firebase'

export interface Transaction {
  id: number
  title: string
  type: 'deposit' | 'withdraw' | undefined
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
  createdAt: Date | string
  userID?: string
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
  editTransaction: (transactionToBeEdited: Transaction) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [categories, setCategories] = useState<Categories[]>([])
  const [user] = useAuthState(auth)

  useEffect(() => {
    const fetchData = async () => {
      api.get('transactions').then((response) => {
        const userTransactions = response.data.filter(
          (transaction: any) => transaction.userID === user!.uid,
        )

        setTransactions(userTransactions)
      })

      api.get('categories').then((response) => setCategories(response.data))
    }

    fetchData()
  }, [user])

  async function createTransaction(transactionInput: TransactionInput) {
    const transactionInputWithUserId = {
      ...transactionInput,
      userID: user!.uid,
    }

    const response = await api.post('/transactions', transactionInputWithUserId)
    const transaction = response.data
    setTransactions(() => [...transactions, transaction])
  }

  async function editTransaction(transactionInput: Transaction) {
    const response = await api.put(
      `/transactions/${transactionInput.id}`,
      transactionInput,
    )
    const transaction = response.data
    setTransactions(() => [...transactions, transaction])
  }

  async function deleteTransaction(transactionId: number) {
    const deletedTransaction = transactions.find((tr) => tr.id == transactionId)

    const response = await api.delete(`/transactions/${transactionId}`)

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
      value={{
        transactions,
        categories,
        createTransaction,
        deleteTransaction,
        editTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}

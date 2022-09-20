import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../services/api'

import { db } from '../services/firebase'

interface Transaction {
  id: string
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
  id: string
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
    const firebaseFetchTransactionsData = async () => {
      const colRef = collection(db, 'transactions')
      const q = query(colRef, orderBy('createdAt'))
      onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc): Transaction => {
          const { title, type, category, amount, createdAt } = doc.data()

          return {
            id: doc.id,
            title,
            type,
            category,
            amount,
            createdAt,
          }
        })

        setTransactions(data)
      })
    }

    const firebaseFetchCategoriesData = async () => {
      const colRef = collection(db, 'categories')
      const q = query(colRef, orderBy('name'))
      onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc): Categories => {
          const { name } = doc.data()

          return {
            id: doc.id,
            name
          }
        })

        setCategories(data)
      })
    }

    firebaseFetchTransactionsData()
    firebaseFetchCategoriesData()
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const colRef = collection(db, 'transactions')
    addDoc(colRef, transactionInput)
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

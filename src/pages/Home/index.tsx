import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import {
  query,
  collection,
  getDocs,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore'
import { auth, db, logout } from '../../services/firebase'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { GridContainer } from './style'

export function Home() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const fetchUserName = async () => {
    try {
      setTimeout(async () => {
        const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
        const doc = await getDocs(q)
        const data = doc.docs[0].data()
        setName(!data.name ? 'usuário' : data.name)
      },1000)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
    fetchUserName()
  }, [user, loading])

  return (
    <GridContainer>
      <div className="header">
        <Header userName={name} />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </GridContainer>
  )
}

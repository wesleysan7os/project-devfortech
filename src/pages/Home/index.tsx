import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where, onSnapshot, orderBy } from 'firebase/firestore'
import { auth, db, logout } from '../../services/firebase'
import './Home.css'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'

export function Home() {
  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      console.error(err)
      alert('An error occured while fetching user data')
    }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
    fetchUserName()
  }, [user, loading])

  return (
    <>
      <Header userName={name} />
      <Main />
    </>
  )
}

import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { query, collection, getDocs, where, onSnapshot, orderBy } from 'firebase/firestore'
import { auth, db, logout } from '../../services/firebase'
import './Home.css'
import { Header } from '../../components/Header'

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

  const fetchTransactions = async () => {
    // try {
    //   const colRef = collection(db, 'transactions')
    //   const q = query(colRef, orderBy('createdAt'));

    //   onSnapshot(q, (snapshot) => {
    //     let transactions: any = []
    //     snapshot.docs.forEach((doc) => {
    //       transactions.push({ ...doc.data(), id: doc.id })
    //     })
    //     console.log(transactions)
    //   })
    // } catch (err) {
    //   console.error(err)
    //   alert('An error occured while fetching user data')
    // }
  }

  useEffect(() => {
    if (loading) return
    if (!user) return navigate('/')
    fetchUserName()
    fetchTransactions()
  }, [user, loading])

  return (
    <>
      <Header userName={name} />
      <div>
        <div>
          Logged in as
          <div>
            {name} <span>x</span>
          </div>
          <div>{user?.email}</div>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

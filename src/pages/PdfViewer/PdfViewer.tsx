import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { ReportPdf } from '../../components/ReportPdf'
import { auth, db } from '../../services/firebase'

const ControllerContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  border: 1px solid #383838;
  background-color: #272727;
  color: white;

  h5 {
    margin: 0;
  }
`

export function PdfViewer() {
  let navigate = useNavigate()

  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState('')

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
    fetchUserName()
  }, [])

  const [searchParams] = useSearchParams()

  const monthToGeneratePdf = searchParams.get('month')
  return (
    <div>
      <ControllerContainer>
        <h5>Wallet - Relatório de Despesas em PDF</h5>
        <div>
          <Button
            onClick={() => navigate('/home/report', { replace: true })}
            variant="success"
          >
            Voltar para Dashboard
          </Button>
        </div>
      </ControllerContainer>
      {name ? (
        <ReportPdf userName={name} month={monthToGeneratePdf} />
      ) : (
        <h1 style={{ padding: '10px', color: 'white' }}>Carregando PDF...</h1>
      )}
    </div>
  )
}

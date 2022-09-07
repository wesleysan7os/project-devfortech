import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'

import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { TransactionModal } from './components/TransactionModal'

export function App() {
  //state temporario modal
  const [displayModal, setDisplayModal] = useState(false)

  const handleClose = () => setDisplayModal(false)
  return (
    <>
      <Header />
      <GlobalStyle />
      <Button variant="primary" onClick={() => setDisplayModal(true)}>
        Abrir modal teste
      </Button>
      <TransactionModal show={displayModal} onClose={handleClose} />
    </>
  )
}

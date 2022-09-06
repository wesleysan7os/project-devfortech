import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

import { TransactionModal } from './components/TransactionModal'

export function App() {
  //state temporario modal
  const [displayModal, setDisplayModal] = useState(false)

  const handleClose = () => setDisplayModal(false)
  return (
    <div className="App">
      <h3>Grupo 4</h3>
      <Button variant="primary" onClick={() => setDisplayModal(true)}>
        Abrir modal teste
      </Button>
      <TransactionModal show={displayModal} onClose={handleClose} />
    </div>
  )
}

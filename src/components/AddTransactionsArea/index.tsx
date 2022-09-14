import { useState } from 'react'

import { Plus } from 'phosphor-react'

import { Container, StyledButton } from './styles'
import { TransactionModal } from '../TransactionModal'

export function AddTransactionsArea() {
  const [displayModal, setDisplayModal] = useState(false)
  const [transactionType, setTransactionType] = useState<
    'withdraw' | 'deposit'
  >('deposit')

  function handleClose() {
    setDisplayModal(false)
  }

  return (
    <>
      <Container>
        <a
          onClick={() => {
            setTransactionType('deposit')
            setDisplayModal(true)
          }}
        >
          <StyledButton borderColor={'lightgreen'}>
            Adicionar Entradas
            <Plus size={100} color="lightgreen" weight="bold" />
          </StyledButton>
        </a>
        <a
          onClick={() => {
            setTransactionType('withdraw')
            setDisplayModal(true)
          }}
        >
          <StyledButton borderColor={'orangered'}>
            Adicionar Saídas
            <Plus size={100} color="red" weight="bold" />
          </StyledButton>
        </a>
        <a>
          <StyledButton className="report" borderColor={'yellow'}>
            Acessar Relatório Completo
          </StyledButton>
        </a>
      </Container>
      <TransactionModal
        show={displayModal}
        onClose={handleClose}
        transactionType={transactionType}
      />
    </>
  )
}

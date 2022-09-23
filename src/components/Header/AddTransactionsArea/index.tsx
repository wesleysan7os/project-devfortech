import { useState } from 'react'

import { Plus } from 'phosphor-react'

import { Container, StyledButton } from './styles'
import { TransactionModal } from '../../TransactionModal'
import { useNavigate } from 'react-router-dom'

export function AddTransactionsArea() {
  const [displayModal, setDisplayModal] = useState(false)
  const [selectedReport, setSelectedReport] = useState<
    'summaryWithdraw' | 'completeReport'
  >('summaryWithdraw')
  const [transactionType, setTransactionType] = useState<
    'withdraw' | 'deposit'
  >('deposit')

  function handleClose() {
    setDisplayModal(false)
  }

  const navigate = useNavigate()

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
            Adicionar Receitas
            <Plus className="" size={100} color="lightgreen" weight="bold" />
          </StyledButton>
        </a>
        <a
          onClick={() => {
            setTransactionType('withdraw')
            setDisplayModal(true)
          }}
        >
          <StyledButton borderColor={'orangered'}>
            Adicionar Despesas
            <Plus size={100} color="red" weight="bold" />
          </StyledButton>
        </a>
        <a>
          <StyledButton
            onClick={() => {
              setSelectedReport(
                selectedReport === 'summaryWithdraw'
                  ? 'completeReport'
                  : 'summaryWithdraw',
              )
              navigate(selectedReport === 'summaryWithdraw' ? 'report' : '', {
                replace: true,
              })
            }}
            className="report"
            borderColor={'yellow'}
          >
            {selectedReport === 'summaryWithdraw'
              ? 'Acessar Relatório Completo'
              : 'Acessar Resumo'}
          </StyledButton>
        </a>
      </Container>
      {displayModal && (
        <TransactionModal
          show={displayModal}
          onClose={handleClose}
          transactionType={transactionType}
        />
      )}
    </>
  )
}

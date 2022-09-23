import { TrendDown, TrendUp, WarningCircle } from 'phosphor-react'
import React from 'react'
import { Button, ButtonGroup, ListGroup, Modal, Table } from 'react-bootstrap'
import { Transaction } from '../../hooks/useTransactions'
import { formatDate } from '../../utils/generalFunctions'
import { Container } from './styles'

type ConfirmDeleteModalPropTypes = {
  show: boolean
  onHide: () => void
  onConfirmDelete: (transactionId: string | number) => void
  transaction: Transaction | null
}

function getTransactionTypeIcon(transactionType: string) {
  if (transactionType === 'deposit') {
    return (
      <TrendUp size={26} style={{ color: '#90EE90', marginRight: '0.4rem' }} />
    )
  } else {
    return (
      <TrendDown size={26} style={{ color: 'tomato', marginRight: '0.4rem' }} />
    )
  }
}

export function ConfirmDeleteModal({
  show,
  onHide,
  onConfirmDelete,
  transaction,
}: ConfirmDeleteModalPropTypes) {
  return (
    <Modal
      size="lg"
      dialogClassName="confirm-delete-modal"
      aria-labelledby="contained-modal-title-vcenter"
      show={show}
      onHide={onHide}
      centered
    >
      <Container>
        {' '}
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <WarningCircle
              style={{ marginRight: '0.5rem', color: 'tomato' }}
              size={32}
            />
            Confirmar Exclusão
          </Modal.Title>
        </Modal.Header>
        {transaction && (
          <Modal.Body>
            <h5>Atenção</h5>
            <p>
              Deseja mesmo excluir a{' '}
              {transaction.type === 'deposit' ? 'receita' : 'despesa'}
              <span style={{ fontWeight: '800', marginLeft: '5px' }}>
                {transaction!.title}
              </span>
              ? Não é possível reverter essa decisão.
            </p>
            <Table
              striped
              variant="dark"
              style={{ border: '1px solid #565656', color: '#dddddd' }}
            >
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Título</th>
                  <th>Valor</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="custom-td">{transaction!.category}</td>
                  <td className="custom-td">{transaction!.title}</td>
                  <td className="custom-td">
                    {getTransactionTypeIcon(transaction!.type)}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction!.amount)}
                  </td>
                  <td className="custom-td">
                    {formatDate(transaction!.createdAt)}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
        )}
        <Modal.Footer
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          <Button
            variant="danger"
            onClick={() => onConfirmDelete(transaction!.id)}
          >
            Excluir{' '}
            {transaction && transaction!.type === 'deposit'
              ? 'receita'
              : 'despesa'}
          </Button>
          <Button variant="secondary" onClick={() => onHide()}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  )
}

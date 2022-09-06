import { useRef } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { ButtonDiv, Card } from './styles'

type ModalProps = {
  show: boolean
  onClose(): void
}

export function TransactionModal({ show, onClose }: ModalProps) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Despesa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, culpa.
          (Formulario Cadastro)
        </Card>
      </Modal.Body>

      <Modal.Footer>
        <ButtonDiv>
          <Button
            variant="outline-primary"
            onClick={onClose}
            style={{ margin: '0 5px' }}
          >
            Cancelar
          </Button>
          <Button variant="primary">Cadastrar</Button>
        </ButtonDiv>
      </Modal.Footer>
    </Modal>
  )
}

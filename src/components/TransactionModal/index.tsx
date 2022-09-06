import { FormEvent, useState } from 'react'
import { X, Checks } from 'phosphor-react'
import {
  Modal,
  Form,
  Button,
  FloatingLabel,
  ButtonGroup,
  Toast,
  ToastContainer,
} from 'react-bootstrap'

import { Container } from './styles'
import { CATEGORIES } from '../../constants/categories'

type ModalProps = {
  show: boolean
  onClose: () => void
}

export function TransactionModal({ show, onClose }: ModalProps) {
  const [isTransactionDataValid, setIsTransactionDataValid] = useState(false)
  const [showToastSuccessMessage, setShowToastSuccessMessage] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onClose()
    //pos-validaçao
    setIsTransactionDataValid(true)
    setShowToastSuccessMessage(true)
  }

  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Container>
          <Modal.Header className="mb-2">
            <Modal.Title>Cadastrar Receita</Modal.Title>
            <button className="close-button">
              <X size={20} onClick={onClose} />
            </button>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3">
                <FloatingLabel label="Título" controlId="formBasicTitle">
                  <Form.Control type="text" placeholder="Título da transação" />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel label="Valor" controlId="formBasicValue">
                  <Form.Control
                    type="number"
                    placeholder="Valor da transação"
                  />
                </FloatingLabel>
              </Form.Group>

              <FloatingLabel
                controlId="floatingSelect"
                label="Selecione a categoria"
              >
                <Form.Select className="mb-5" aria-label="category's options">
                  {CATEGORIES.map((category) => (
                    <option key={category.id} value="">
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>

              <ButtonGroup className="d-flex gap-3">
                <Button variant="success" type="submit" className="rounded">
                  Salvar
                </Button>
                <Button
                  variant="secondary"
                  type="button"
                  className="rounded"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
              </ButtonGroup>
            </Form>
          </Modal.Body>
        </Container>
      </Modal>
      {isTransactionDataValid && (
        <ToastContainer position="top-end">
          <Toast
            onClose={() => setShowToastSuccessMessage(false)}
            show={showToastSuccessMessage}
            delay={3000}
            autohide
            bg="light"
          >
            <Toast.Header className="gap-2">
              <Checks size={20} />
              <strong className="me-auto">Sucesso!</strong>
              <small>0 mins ago</small>
            </Toast.Header>
            <Toast.Body>Transação adicionada.</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
    </>
  )
}

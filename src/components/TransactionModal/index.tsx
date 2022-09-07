import { FormEvent, useState, useRef, useEffect } from 'react'
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

import { Container, ErrorSpan } from './styles'
import { CATEGORIES } from '../../constants/categories'
import { isCategoryValid, isTitleValid, isValueValid } from './validations'

type ModalProps = {
  show: boolean
  onClose: () => void
}

export function TransactionModal({ show, onClose }: ModalProps) {
  //States
  const [isTransactionDataValid, setIsTransactionDataValid] =
    useState<boolean>(false)
  const [showToastSuccessMessage, setShowToastSuccessMessage] =
    useState<boolean>(false)

  //States das mensagens de erro do modal
  const [titleError, setTitleError] = useState<boolean>(false)
  const [valueError, setValueError] = useState<boolean>(false)
  const [categoryError, setCategoryError] = useState<boolean>(false)

  //Refs
  let titleInput = useRef<HTMLInputElement | null>(null)
  let valueInput = useRef<HTMLInputElement>(null)
  let categoryInput = useRef<HTMLSelectElement | null>(null)

  function handleValidation(): boolean {
    //manipula as mensagens de erro
    isTitleValid(titleInput?.current?.value)
      ? setTitleError(false)
      : setTitleError(true)

    isValueValid(valueInput?.current?.value)
      ? setValueError(false)
      : setValueError(true)

    isCategoryValid(categoryInput?.current?.value)
      ? setCategoryError(false)
      : setCategoryError(true)

    //faz a validação e retorna true ou false
    if (
      isTitleValid(titleInput?.current?.value) &&
      isValueValid(valueInput?.current?.value) &&
      isCategoryValid(categoryInput?.current?.value)
    ) {
      return true
    } else {
      return false
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (handleValidation()) {
      setIsTransactionDataValid(true)
      setShowToastSuccessMessage(true)
      onClose()
    }
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
                  <Form.Control
                    type="text"
                    placeholder="Título da transação"
                    maxLength={30}
                    ref={titleInput}
                  />
                </FloatingLabel>
                <ErrorSpan>{titleError && '*Campo Obrigatório.'}</ErrorSpan>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel label="Valor" controlId="formBasicValue">
                  <Form.Control
                    type="number"
                    placeholder="Valor da transação"
                    ref={valueInput}
                  />
                </FloatingLabel>
                <ErrorSpan>{valueError && '*Campo Obrigatório'}</ErrorSpan>
              </Form.Group>

              <Form.Group className="mb-5">
                {' '}
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Selecione a categoria"
                >
                  <Form.Select
                    aria-label="category's options"
                    ref={categoryInput}
                  >
                    <option selected={true} value={undefined}></option>
                    {CATEGORIES.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </FloatingLabel>
                <ErrorSpan>{categoryError && '*Campo Obrigatório'}</ErrorSpan>
              </Form.Group>

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
        <ToastContainer position="top-end" style={{ margin: '5px' }}>
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

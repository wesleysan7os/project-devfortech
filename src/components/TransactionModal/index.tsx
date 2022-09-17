import { FormEvent, useState, useRef } from 'react'
import { X, TrendDown, TrendUp } from 'phosphor-react'
import {
  Modal,
  Form,
  Button,
  FloatingLabel,
  ButtonGroup,
} from 'react-bootstrap'

import { Container, ErrorSpan } from './styles'
import { isCategoryValid, isTitleValid, isValueValid } from './validations'
import { useTransactions } from '../../hooks/useTransactions'
import { off } from 'process'

type ModalProps = {
  show: boolean
  transactionType: 'withdraw' | 'deposit'
  onClose: () => void
}

type CategorysType =
  | ''
  | 'Alimentação'
  | 'Academia'
  | 'Saúde'
  | 'Investimentos'
  | 'Pets'
  | 'Educação'
  | 'Transporte'
  | 'Extra'

export function TransactionModal({
  show,
  onClose,
  transactionType,
}: ModalProps) {
  const { categories, createTransaction } = useTransactions()

  const [isTransactionDataValid, setIsTransactionDataValid] = useState(false)

  const [titleInput, setTitleInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  const [categoryInput, setCategoryInput] = useState<CategorysType>('')

  const [titleError, setTitleError] = useState(false)
  const [valueError, setValueError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)

  let formRef = useRef<HTMLFormElement>()

  function isModalDataValid(): boolean {
    isTitleValid(titleInput) ? setTitleError(false) : setTitleError(true)

    isValueValid(valueInput) ? setValueError(false) : setValueError(true)

    isCategoryValid(categoryInput)
      ? setCategoryError(false)
      : setCategoryError(true)

    setIsTransactionDataValid(
      () => !titleError && !valueError && !categoryError,
    )

    return isTransactionDataValid
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (isModalDataValid()) {
      createTransaction({
        title: titleInput,
        type: transactionType,
        category: categoryInput,
        amount: Number(valueInput),
      })
      onClose()
    }
  }

  function handleExited() {
    setTitleInput('')
    setValueInput('')
    setCategoryInput('')
    setTitleError(false)
    setValueError(false)
    setCategoryError(false)
  }

  const stringObligatoryField: string = '*Campo obrigatório'

  return (
    <Modal
      ref={formRef}
      show={show}
      onHide={onClose}
      onExited={handleExited}
      centered
      dialogClassName="modal-90w"
    >
      <Container>
        <Modal.Header className="mb-2">
          <Modal.Title>
            {transactionType === 'deposit' ? (
              <TrendUp
                size={32}
                color="#90EE90"
                style={{ marginRight: '0.8rem' }}
              />
            ) : (
              <TrendDown
                size={32}
                color="tomato"
                style={{ marginRight: '0.8rem' }}
              />
            )}
            Cadastrar {transactionType === 'deposit' ? 'Receita' : 'Despesa'}
          </Modal.Title>
          <button className="close-button">
            <X size={20} onClick={onClose} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <Form.Group className="mb-3">
              <FloatingLabel label="Título" controlId="formBasicTitle">
                <Form.Control
                  type="text"
                  placeholder="Título da transação"
                  maxLength={30}
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                />
              </FloatingLabel>
              <ErrorSpan>{titleError && stringObligatoryField}</ErrorSpan>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Valor" controlId="formBasicValue">
                <Form.Control
                  type="number"
                  placeholder="Valor da transação"
                  value={valueInput}
                  onChange={(e) => setValueInput(e.target.value)}
                />
              </FloatingLabel>
              <ErrorSpan>{valueError && stringObligatoryField}</ErrorSpan>
            </Form.Group>

            <Form.Group className="mb-5">
              {' '}
              <FloatingLabel
                controlId="floatingSelect"
                label="Selecione a categoria"
              >
                <Form.Select
                  onChange={(e) =>
                    setCategoryInput(e.target.value as CategorysType)
                  }
                  aria-label="category's options"
                  value={categoryInput}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
              <ErrorSpan>{categoryError && stringObligatoryField}</ErrorSpan>
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
  )
}

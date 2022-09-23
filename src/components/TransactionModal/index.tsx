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
import {
  isCategoryValid,
  isTitleValid,
  isValueValid,
} from '../../utils/validations'
import { toast } from 'react-toastify'
import { NumericFormat } from 'react-number-format'
import { useTransactions } from '../../hooks/useTransactions'

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

  const [titleInput, setTitleInput] = useState('')
  const [valueInput, setValueInput] = useState(0)
  const [categoryInput, setCategoryInput] = useState<CategorysType>('')
  const [dateInput, setDateInput] = useState<Date>(new Date())

  const [titleError, setTitleError] = useState(false)
  const [valueError, setValueError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)

  let formRef = useRef<HTMLFormElement>()
  let dateInputRef = useRef<HTMLInputElement>(null)

  function isModalDataValid(): boolean {
    isTitleValid(titleInput) ? setTitleError(false) : setTitleError(true)

    isValueValid(valueInput) ? setValueError(false) : setValueError(true)

    isCategoryValid(categoryInput)
      ? setCategoryError(false)
      : setCategoryError(true)

    if (
      isTitleValid(titleInput) &&
      isValueValid(valueInput) &&
      isCategoryValid(categoryInput)
    ) {
      return true
    }

    return false
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (isModalDataValid()) {
      createTransaction({
        title: titleInput,
        type: transactionType,
        category: categoryInput,
        amount: valueInput,
        createdAt: dateInput,
      })
      onClose()
      toast.success(
        `${
          transactionType === 'withdraw' ? 'Despesa' : 'Receita'
        } cadastrada com sucesso.`,
      )
    }
  }

  function loadTodaysDate() {
    dateInputRef!.current!.value = getTodayDate()
  }

  function handleExited() {
    setTitleInput('')
    setValueInput(0)
    setCategoryInput('')
    setTitleError(false)
    setValueError(false)
    setCategoryError(false)
  }

  function getTodayDate() {
    let today: Date | string = new Date().toISOString().slice(0, 10)
    return today
  }

  const stringObligatoryField: string = '*Campo obrigatório'

  return (
    <Modal
      ref={formRef}
      show={show}
      onHide={onClose}
      onEnter={loadTodaysDate}
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
            Adicionar {transactionType === 'deposit' ? 'Receita' : 'Despesa'}
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
                  onBlur={() =>
                    isTitleValid(titleInput)
                      ? setTitleError(false)
                      : setTitleError(true)
                  }
                />
              </FloatingLabel>
              <ErrorSpan>{titleError && stringObligatoryField}</ErrorSpan>
            </Form.Group>

            <Form.Group className="mb-3">
              <FloatingLabel label="Valor (R$)" controlId="formBasicValue">
                <NumericFormat
                  customInput={Form.Control}
                  thousandSeparator={'.'}
                  prefix={'R$ '}
                  decimalSeparator=","
                  allowedDecimalSeparators={['-', '.', ' ']}
                  decimalScale={2}
                  placeholder="Valor da transação"
                  displayType="input"
                  onValueChange={(values, sourceInfo) => {
                    setValueInput(values.floatValue as number)
                  }}
                  onBlur={() =>
                    isValueValid(valueInput)
                      ? setValueError(false)
                      : setValueError(true)
                  }
                ></NumericFormat>
              </FloatingLabel>
              <ErrorSpan>{valueError && stringObligatoryField}</ErrorSpan>
            </Form.Group>

            <Form.Group className="mb-3">
              {' '}
              <FloatingLabel
                controlId="floatingSelect"
                label="Selecione a categoria"
              >
                <Form.Select
                  onChange={(e) => {
                    setCategoryInput(e.target.value as CategorysType)
                    setCategoryError(false)
                  }}
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

            <Form.Group className="mb-5">
              <FloatingLabel controlId="floatingDate" label="Data">
                <Form.Control
                  onChange={(e) => setDateInput(new Date(e.target.value))}
                  aria-label="Data"
                  type="date"
                  max={getTodayDate()}
                  ref={dateInputRef}
                />
              </FloatingLabel>
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

import { FormEvent, useState, useRef } from 'react'
import { X, Checks, TrendDown, TrendUp } from 'phosphor-react'
import {
  Modal,
  Form,
  Button,
  FloatingLabel,
  ButtonGroup,
  Toast,
  ToastContainer,
  Badge,
} from 'react-bootstrap'

import { Container, ErrorSpan } from './styles'
import { CATEGORIES } from '../../constants/categories'
import { isCategoryValid, isTitleValid, isValueValid } from './validations'
import { toast } from 'react-toastify'
import { IMaskInput } from 'react-imask'
import { NumericFormat } from 'react-number-format'

type ModalProps = {
  show: boolean
  transactionType: 'withdraw' | 'deposit'
  onClose: () => void
}

export function TransactionModal({
  show,
  onClose,
  transactionType,
}: ModalProps) {
  const [isTransactionDataValid, setIsTransactionDataValid] = useState(false)
  const [showToastSuccessMessage, setShowToastSuccessMessage] = useState(false)

  const [titleError, setTitleError] = useState(false)
  const [valueError, setValueError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)
  const [valueInput, setValueInput] = useState<number | undefined>(0)

  let titleInput = useRef<HTMLInputElement | null>(null)
  // let valueInput = useRef<HTMLInputElement | null>(null)
  let categoryInput = useRef<HTMLSelectElement | null>(null)
  let dateInput = useRef<HTMLInputElement | null>(null)
  let formRef = useRef<HTMLFormElement>()

  function isModalDataValid(): boolean {
    isTitleValid(titleInput?.current?.value)
      ? setTitleError(false)
      : setTitleError(true)

    isValueValid(valueInput) ? setValueError(false) : setValueError(true)

    isCategoryValid(categoryInput?.current?.value)
      ? setCategoryError(false)
      : setCategoryError(true)

    if (
      isTitleValid(titleInput?.current?.value) &&
      isValueValid(valueInput) &&
      isCategoryValid(categoryInput?.current?.value)
    ) {
      return true
    } else {
      return false
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (isModalDataValid()) {
      setIsTransactionDataValid(true)
      setShowToastSuccessMessage(true)
      onClose()
      toast.success(
        `${
          transactionType === 'withdraw' ? 'Despesa' : 'Receita'
        } cadastrada com sucesso.`,
      )
    }
  }

  function handleExited() {
    setCategoryError(false)
    setValueInput(0)
    setTitleError(false)
    setValueError(false)
  }

  function handleModalLoad() {
    titleInput?.current?.focus()
    dateInput.current!.value = getTodayDate()
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
      onEntered={handleModalLoad}
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
                    setValueInput(values.floatValue)
                    console.log(values, sourceInfo)
                  }}
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
              <ErrorSpan>{categoryError && stringObligatoryField}</ErrorSpan>
            </Form.Group>

            <Form.Group className="mb-5">
              <FloatingLabel controlId="floatingDate" label="Data">
                <Form.Control
                  aria-label="Data"
                  type="date"
                  ref={dateInput}
                  max={getTodayDate()}
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

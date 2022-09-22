import {
  Barbell,
  Car,
  Dog,
  Eraser,
  Gift,
  GraduationCap,
  Hamburger,
  Heartbeat,
  PencilSimpleLine,
  TrendDown,
  TrendUp,
  X,
} from 'phosphor-react'
import { useState, useEffect, useRef } from 'react'
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  FloatingLabel,
} from 'react-bootstrap'
import { toast } from 'react-toastify'

import { Transaction, useTransactions } from '../../../hooks/useTransactions'
import { formatDate } from '../../../utils/generalFunctions'
import { ConfirmDeleteModal } from '../../ConfirmDeleteModal'
import { StackedBarchart } from '../../StackedBarchart'
import { Container } from './styles'

export function FullReport() {
  const { transactions, categories, deleteTransaction } = useTransactions()

  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([])

  const [typeFilter, setTypeFilter] = useState<boolean | number>(false)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [dateFilter, setDateFilter] = useState<boolean | string>('')
  const [titleFilter, setTitleFilter] = useState<boolean | string>(false)

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false)

  const [transactionToBeDeleted, setTransactionToBeDeleted] =
    useState<Transaction | null>(null)

  let typeFilterRef = useRef<HTMLSelectElement>(null)
  let categoryFilterRef = useRef<HTMLSelectElement>(null)
  let dateFilterRef = useRef<HTMLInputElement>(null)
  let titleFilterRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  useEffect(() => {
    let tempTransactions = transactions

    if (typeFilter === 1) {
      tempTransactions = tempTransactions.filter(
        (transaction) => transaction.type === 'deposit',
      )
    } else if (typeFilter === 2) {
      tempTransactions = tempTransactions.filter(
        (transaction) => transaction.type === 'withdraw',
      )
    } else {
      setTypeFilter(false)
    }

    if (categoryFilter !== 'all') {
      tempTransactions = tempTransactions.filter(
        (transaction) => transaction.category === categoryFilter,
      )
    }

    if (titleFilter !== false) {
      tempTransactions = tempTransactions.filter((transaction) => {
        if (
          transaction.title
            .toLowerCase()
            .trim()
            .includes(String(titleFilter).toLowerCase())
        )
          return transaction
      })
    }

    if (dateFilter !== '') {
      tempTransactions = tempTransactions.filter(
        (transaction) =>
          String(transaction.createdAt).split('T')[0] === dateFilter,
      )
    }

    setFilteredTransactions(() => [...tempTransactions])
  }, [typeFilter, categoryFilter, dateFilter, titleFilter])

  function clearFilters() {
    toast.success('Filtro limpo. Exibindo todas as transações.')
    setTypeFilter(false)
    setCategoryFilter('all')
    setDateFilter('')
    setTitleFilter(false)
    typeFilterRef.current!.value = '0'
    categoryFilterRef.current!.value = 'all'
    dateFilterRef.current!.value = ''
    titleFilterRef.current!.value = ''
  }

  const delayShow = 1000

  const delayHide = 100

  const renderTooltip = (textContent: string) => (
    <Tooltip id="button-tooltip">{textContent}</Tooltip>
  )

  function format(expense: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(expense)
  }

  const categoryIconProps = {
    size: 24,
    style: {
      marginRight: '5px',
    },
  }

  function getCategoryIcon(category: string) {
    if (category === 'Alimentação') {
      return <Hamburger {...categoryIconProps} />
    } else if (category === 'Academia') {
      return <Barbell {...categoryIconProps} />
    } else if (category === 'Investimentos') {
      return <TrendUp {...categoryIconProps} />
    } else if (category === 'Pets') {
      return <Dog {...categoryIconProps} />
    } else if (category === 'Saúde') {
      return <Heartbeat {...categoryIconProps} />
    } else if (category === 'Educação') {
      return <GraduationCap {...categoryIconProps} />
    } else if (category === 'Transporte') {
      return <Car {...categoryIconProps} />
    } else if (category === 'Extra') {
      return <Gift {...categoryIconProps} />
    }
  }

  function getTransactionTypeIcon(transactionType: string) {
    if (transactionType === 'deposit') {
      return (
        <TrendUp
          size={26}
          style={{ color: '#90EE90', marginRight: '0.4rem' }}
        />
      )
    } else {
      return (
        <TrendDown
          size={26}
          style={{ color: 'tomato', marginRight: '0.4rem' }}
        />
      )
    }
  }

  function openConfirmationModalHandler(transaction: Transaction) {
    setTransactionToBeDeleted(transaction)
    setDisplayConfirmationModal(true)
  }

  function deleteTransactionHandler(transactionId: number | string) {
    deleteTransaction(Number(transactionId))
    setDisplayConfirmationModal(false)
  }

  return (
    <>
      <ConfirmDeleteModal
        show={displayConfirmationModal}
        transaction={transactionToBeDeleted}
        onHide={() => setDisplayConfirmationModal(false)}
        onConfirmDelete={deleteTransactionHandler}
      />
      <Container>
        <div className="report-container">
          <h5>Relatório Completo de Movimentações</h5>

          <div className="filter-container">
            <Form.Group className="filter-option">
              <FloatingLabel controlId="type-filter" label="Tipo">
                <Form.Select
                  aria-label="type filter options"
                  ref={typeFilterRef}
                  onChange={(e) => setTypeFilter(Number(e.target.value))}
                >
                  <option value={0}>Todos</option>
                  <option value={1}>Receitas</option>
                  <option value={2}>Despesas</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="filter-option">
              <FloatingLabel controlId="category-filter" label="Categoria">
                <Form.Select
                  aria-label="category filter options"
                  ref={categoryFilterRef}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value={'all'}>Todos</option>
                  {categories &&
                    categories.map((category) => (
                      <option value={category.name} key={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="filter-option">
              <FloatingLabel controlId="date-filter" label="Data">
                <Form.Control
                  aria-label="date filter options"
                  type="date"
                  ref={dateFilterRef}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group className="filter-option">
              <FloatingLabel label="Título" controlId="title-filter">
                <Form.Control
                  type="text"
                  placeholder="Título da transação"
                  maxLength={30}
                  ref={titleFilterRef}
                  onChange={(e) => setTitleFilter(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
            <OverlayTrigger
              placement={'top'}
              delay={{
                show: delayShow,
                hide: delayHide,
              }}
              overlay={renderTooltip('Limpar filtros')}
            >
              <Button variant="outline-danger" onClick={clearFilters}>
                <Eraser size={32} />
              </Button>
            </OverlayTrigger>
          </div>
          <ul className="list">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((transaction) => (
                <li key={transaction.id}>
                  <span className="info-value secondary">
                    {getCategoryIcon(transaction.category)}
                    {transaction.category}
                  </span>
                  <span className="info-value transaction-title">
                    {transaction.title}
                  </span>
                  <span className="info-value primary">
                    {getTransactionTypeIcon(transaction.type)}{' '}
                    {format(transaction.amount)}
                  </span>
                  <span className="info-value secondary date">
                    {formatDate(transaction.createdAt)}
                  </span>

                  <div className="actions">
                    <OverlayTrigger
                      placement={'top'}
                      delay={{
                        show: delayShow,
                        hide: delayHide,
                      }}
                      overlay={renderTooltip(
                        `Editar ${
                          transaction.type === 'withdraw'
                            ? 'despesa'
                            : 'receita'
                        } '${transaction.title}'`,
                      )}
                    >
                      <Button variant="link">
                        <PencilSimpleLine
                          size={18}
                          weight={'thin'}
                          color={'#90EE90'}
                        />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement={'top'}
                      delay={{
                        show: delayShow,
                        hide: delayHide,
                      }}
                      overlay={renderTooltip(
                        `Excluir ${
                          transaction.type === 'withdraw'
                            ? 'despesa'
                            : 'receita'
                        } '${transaction.title}'`,
                      )}
                    >
                      <Button
                        variant="link"
                        onClick={() => {
                          openConfirmationModalHandler(transaction)
                        }}
                      >
                        <X size={18} color={'tomato'} />
                      </Button>
                    </OverlayTrigger>
                  </div>
                </li>
              ))
            ) : (
              <span>
                Nenhuma transação encontrada. Adicione uma nova despesa/receita
                ou mude os filtros aplicados.
              </span>
            )}
          </ul>
        </div>
        <StackedBarchart />
      </Container>
    </>
  )
}

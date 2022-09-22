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
import { useState, useEffect } from 'react'
import {
  Button,
  OverlayTrigger,
  Tooltip,
  Form,
  FloatingLabel,
} from 'react-bootstrap'

import { Transaction, useTransactions } from '../../../hooks/useTransactions'
import { Container } from './styles'

export function FullReport() {
  const { transactions, categories } = useTransactions()

  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([])

  const [typeFilter, setTypeFilter] = useState<boolean | number>(false)
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [dateFilter, setDateFilter] = useState<boolean | string>('')
  const [titleFilter, setTitleFilter] = useState<boolean | string>(false)

  useEffect(() => {
    setFilteredTransactions(transactions)
  }, [transactions])

  useEffect(() => {
    let tempTransactions = transactions

    console.log(dateFilter)

    if (typeFilter === 1) {
      tempTransactions = tempTransactions.filter((tr) => tr.type === 'deposit')
    } else if (typeFilter === 2) {
      tempTransactions = tempTransactions.filter((tr) => tr.type === 'withdraw')
    } else {
      setTypeFilter(false)
    }

    if (categoryFilter !== 'all') {
      tempTransactions = tempTransactions.filter(
        (tr) => tr.category === categoryFilter,
      )
    }

    if (titleFilter !== false) {
      tempTransactions = tempTransactions.filter((tr) => {
        if (
          tr.title
            .toLowerCase()
            .trim()
            .includes(String(titleFilter).toLowerCase())
        )
          return tr
      })
    }

    if (dateFilter !== '') {
      tempTransactions = tempTransactions.filter(
        (tr) => String(tr.createdAt).split('T')[0] === dateFilter,
      )
    }

    setFilteredTransactions(() => [...tempTransactions])
  }, [typeFilter, categoryFilter, dateFilter, titleFilter])

  function clearFilters() {
    setTypeFilter(false)
    setCategoryFilter('all')
    setDateFilter('')
    setTitleFilter(false)
  }

  const overlayProps = {
    placement: 'top',
    delay: {
      show: 1000,
      hide: 100,
    },
  }

  const renderTooltip = (textContent: string) => (
    <Tooltip id="button-tooltip">{textContent}</Tooltip>
  )

  function format(expense: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(expense)
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR')
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

  console.log('transaçoes:', transactions)
  return (
    <Container>
      <div className="report-container">
        <h5>Relatório Completo de Transações</h5>

        <div className="filter-container">
          <Form.Group className="filter-option">
            <FloatingLabel controlId="floatingSelect" label="Filtrar por tipo">
              <Form.Select
                aria-label="category's options"
                onChange={(e) => setTypeFilter(Number(e.target.value))}
              >
                <option value={0}>Todos</option>
                <option value={1}>Receitas</option>
                <option value={2}>Despesas</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="filter-option">
            <FloatingLabel
              controlId="floatingSelect"
              label="Filtrar por categoria"
            >
              <Form.Select
                aria-label="category's options"
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
            <FloatingLabel controlId="floatingDate" label="Filtrar por Data">
              <Form.Control
                aria-label="Filtrar por Data"
                type="date"
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="filter-option">
            <FloatingLabel
              label="Filtrar por Título"
              controlId="formBasicTitle"
            >
              <Form.Control
                type="text"
                placeholder="Título da transação"
                maxLength={30}
                onChange={(e) => setTitleFilter(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          <OverlayTrigger
            {...overlayProps}
            overlay={renderTooltip('Limpar filtros')}
          >
            <Button variant="outline-danger" onClick={clearFilters}>
              <Eraser size={32} />
            </Button>
          </OverlayTrigger>
        </div>
        <ul className="list">
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((tr) => (
              <li>
                <span className="info-value secondary">
                  {getCategoryIcon(tr.category)}
                  {tr.category}
                </span>
                <span className="info-value transaction-title">{tr.title}</span>
                <span className="info-value primary">
                  {getTransactionTypeIcon(tr.type)} {format(tr.amount)}
                </span>
                <span className="info-value secondary date">
                  {formatDate(tr.createdAt)}
                </span>

                <div className="actions">
                  <OverlayTrigger
                    {...overlayProps}
                    overlay={renderTooltip(
                      `Editar ${
                        tr.type === 'withdraw' ? 'despesa' : 'receita'
                      } '${tr.title}'`,
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
                    {...overlayProps}
                    overlay={renderTooltip(
                      `Excluir ${
                        tr.type === 'withdraw' ? 'despesa' : 'receita'
                      } '${tr.title}'`,
                    )}
                  >
                    <Button variant="link">
                      <X size={18} color={'tomato'} />
                    </Button>
                  </OverlayTrigger>
                </div>
              </li>
            ))
          ) : (
            <span>
              Nenhuma transação encontrada. Adicione uma nova despesa/receita ou
              mude os filtros aplicados.
            </span>
          )}
        </ul>
      </div>
    </Container>
  )
}
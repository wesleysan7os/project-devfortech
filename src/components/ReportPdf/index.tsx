import React, { useState, useEffect } from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer'
import { useTransactions } from '../../hooks/useTransactions'
import { formatDate, getMonthName } from '../../utils/generalFunctions'

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: 30,
    flexDirection: 'column',
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: '12px',
    flexGrow: 1,
  },

  rowBetween: {
    margin: '10px 0',
    padding: '10px',
    border: '1px dashed gray',
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  viewer: {
    width: window.innerWidth,
    height: window.innerHeight,
  },

  table: {
    width: '100%',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px solid #EEE',
    paddingTop: 8,
    paddingBottom: 8,
  },
  header: {
    borderTop: 'none',
    fontSize: '12px',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  // So Declarative and unDRY 👌
  row1: {
    width: '15%',
    fontSize: '12px',
    textAlign: 'left',
  },
  row2: {
    width: '25%',
    fontSize: '12px',
    textAlign: 'left',
  },
  row3: {
    width: '25%',
    fontSize: '12px',
    textAlign: 'left',
  },
  row4: {
    width: '15%',
    fontSize: '12px',
    textAlign: 'left',
  },
  row5: {
    width: '15%',
    fontSize: '12px',
    textAlign: 'left',
  },
})

interface ReportPdfProps {
  userName: string
  month: string | null
}

export function ReportPdf({ userName, month }: ReportPdfProps) {
  const { transactions } = useTransactions()

  const [filteredTransactions, setFilteredTransactions] = useState(transactions)

  useEffect(() => {
    let filteredArray

    if (month) {
      filteredArray = transactions.filter(
        (tr) => String(tr.createdAt).split('-')[1] === month,
      )
    } else {
      filteredArray = transactions
    }

    setFilteredTransactions(filteredArray)
  }, [month, transactions])

  const summary = filteredTransactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  )
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={{ fontSize: '26px' }}>Wallet</Text>
          <Text style={{ fontSize: '16px' }}>
            Relatório de Movimentações{' '}
            {month
              ? 'de ' + getMonthName(month) + '/' + new Date().getFullYear()
              : 'Completo'}
          </Text>
          <View style={styles.rowBetween}>
            {' '}
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Usuário: {userName}
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Relatório criado em {formatDate(new Date())}
            </Text>
          </View>

          <View style={styles.table}>
            <View style={[styles.row, styles.bold, styles.header]}>
              <Text style={styles.row1}>Categoria</Text>
              <Text style={styles.row2}>Título</Text>
              <Text style={styles.row3}>Valor</Text>
              <Text style={styles.row4}>Data</Text>
              <Text style={styles.row5}>Tipo</Text>
            </View>
            {filteredTransactions.map((transaction, i) => (
              <View key={i} style={styles.row} wrap={false}>
                <Text style={styles.row1}>
                  <Text style={styles.bold}>{transaction.category}</Text>
                </Text>
                <Text style={styles.row2}>{transaction.title}</Text>
                <Text style={styles.row3}>
                  {transaction.type === 'withdraw' ? '(-)' : '(+)'}{' '}
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction!.amount)}
                </Text>
                <Text style={styles.row4}>
                  <Text style={styles.bold}>
                    {formatDate(String(transaction.createdAt))}
                  </Text>
                </Text>
                <Text style={styles.row5}>
                  {transaction.type === 'withdraw' ? 'Despesa' : 'Receita'}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.rowBetween}>
            {' '}
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Total de Despesas:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.withdraws)}
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Total de Receitas:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.deposits)}
            </Text>
            <Text
              style={{
                fontSize: '12px',
              }}
            >
              Saldo Geral:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(summary.total)}
            </Text>
          </View>
          <Text
            style={{
              fontSize: '10px',
              textAlign: 'left',
            }}
          >
            Nordevs - {new Date().getFullYear()}
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  )
}

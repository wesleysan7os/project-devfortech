import React from 'react'
import SummaryList from '../SummaryList'
import SummaryPieChart from '../SummaryPieChart'
import { Container } from './styles'

export function Main() {
  return (
    <Container>
      <SummaryList />
      <SummaryPieChart />
    </Container>
  )
}

import { Barbell, Car, Dog, Gift, Hamburger, Heartbeat, TrendUp } from 'phosphor-react'
import { TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <thead>Resumo Gastos Últimos 7 dias</thead>
        <tbody>
          <tr>
            <td><Hamburger size={32} weight="bold" /></td>
            <td width="50%">Alimentação</td>
            <td>R$ 350,00</td>
          </tr>
          <tr>
            <td><Barbell size={32} weight="bold" /></td>
            <td width="50%">Academia e Esportes</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><Heartbeat size={32} weight="bold" /></td>
            <td width="50%">Saúde</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><TrendUp size={32} weight="bold" /></td>
            <td width="50%">Investimentos</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><Dog size={32} weight="bold" /></td>
            <td width="50%">Pets</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><Heartbeat size={32} weight="bold" /></td>
            <td width="50%">Educação</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><Car size={32} weight="bold" /></td>
            <td width="50%">Transporte</td>
            <td>R$ 1.200,00</td>
          </tr>
          <tr>
            <td><Gift size={32} weight="bold" /></td>
            <td width="50%">Extra</td>
            <td>R$ 1.200,00</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}

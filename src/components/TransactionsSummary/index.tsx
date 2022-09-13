import { ArrowDown, ArrowUp, Eye } from "phosphor-react";
import { Container } from "./styles";

export function TransactionsSummary() {
  return (
    <Container>
      <main className='summary'>
        <header>
          <h2>Olá 🤑</h2>
          <h4>Fernando Farias</h4>
        </header>
        <section>
          <h4>
            Saldo Geral
            <Eye size={32} weight="thin" />
          </h4>
          <h2>R$ 3.650,00</h2>
        </section>
      </main>
      <section className='income'>
        <div>
          <h4>Entradas</h4>
          <span>R$ 1.650,00</span>
        </div>
        <ArrowUp size={80} weight='thin' color='lightgreen' />
      </section>
      <section className='outcome'>
        <div>
          <h4>Saídas</h4>
          <span>R$ 1.250,00</span>
        </div>
        <ArrowDown size={80} weight='thin' color='red' />
      </section>
    </Container>
  )
}
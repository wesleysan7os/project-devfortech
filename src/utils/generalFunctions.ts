export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('pt-BR')
}

export function getCurrentYear(): string {
  return String(new Date().getFullYear())
}

export function checkDateRange(startDate: Date, daysLimit: number): boolean {
  console.log('======================================')
  let today = new Date()

  console.log('DATA DA TRANSAÇÃO:', startDate)
  let dateLimit = new Date()

  console.log('DATA DE HOJE:', dateLimit)

  dateLimit = new Date(today.setDate(dateLimit.getDate() - daysLimit))

  console.log('DATA SUBTRAÍDA:', dateLimit)

  console.log(
    startDate.getTime() >= dateLimit.getTime() &&
      startDate.getTime() <= new Date().getTime(),
  )

  return (
    startDate.getTime() >= dateLimit.getTime() &&
    startDate.getTime() <= new Date().getTime()
  )
}

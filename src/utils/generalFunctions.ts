export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('pt-BR')
}

export function getCurrentYear(): string {
  return String(new Date().getFullYear())
}

export function checkDateRange(startDate: Date, daysLimit: number): boolean {
  let today = new Date()

  let dateLimit = new Date()

  dateLimit = new Date(today.setDate(dateLimit.getDate() - daysLimit))

  return (
    startDate.getTime() >= dateLimit.getTime() &&
    startDate.getTime() <= new Date().getTime()
  )
}

export function getMonthName(month: string) {
  switch (month) {
    case '01':
      return 'Janeiro'
    case '02':
      return 'Fevereiro'
    case '03':
      return 'Março'
    case '04':
      return 'Abril'
    case '05':
      return 'Maio'
    case '06':
      return 'Junho'
    case '07':
      return 'Julho'
    case '08':
      return 'Agosto'
    case '09':
      return 'Setembro'
    case '10':
      return 'Outubro'
    case '11':
      return 'Novembro'
    case '12':
      return 'Dezembro'
    default:
      break
  }
}

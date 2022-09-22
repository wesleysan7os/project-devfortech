export function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('pt-BR')
}

export function getCurrentYear(): string {
  return String(new Date().getFullYear())
}

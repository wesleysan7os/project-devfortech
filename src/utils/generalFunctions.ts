export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('pt-BR')
}

export function getCurrentYear(): string {
  return String(new Date().getFullYear())
}

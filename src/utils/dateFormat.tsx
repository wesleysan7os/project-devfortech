export function dateFormat(timestamp: any) {
  if(timestamp) {
    const date = new Date(timestamp.toDate());

    const day = date.toLocaleDateString('pt-BR');
    const hour = date.toLocaleTimeString('pt-BR');

    return `${day} às ${hour}`;
  }
}
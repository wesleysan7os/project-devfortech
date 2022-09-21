import { Timestamp } from "firebase/firestore";

export function dateFormat(timestamp: Timestamp) {
  if(timestamp) {
    const date = new Date(timestamp.toDate());

    const day = date.toLocaleDateString('pt-BR');
    const hour = date.toLocaleTimeString('pt-BR');

    return date;
  }
}
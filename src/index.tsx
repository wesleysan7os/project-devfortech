import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { createServer, Model } from 'miragejs'

createServer({
  models: {
    transactions: Model,
  },

  // o "seeds(server) {}"
  // serve apenas p/ iniciar banco com algumas informações
  // e padronizar/visualizar quais campos iremos trabalhar
  // depois podem apagar 
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Feelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2022-09-02 10:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions')
    this.get('/transactions/:id')

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })

    this.patch("/transactions/:id", (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let transaction = schema.transactions.find(id)
    
      return transaction.update(data)
    })
    
    this.delete("/transactions/:id")
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

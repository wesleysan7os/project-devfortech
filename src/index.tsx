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
          title: 'Teste 1',
          type: 'deposit',
          category: 'Extra',
          amount: 12000,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 2,
          title: 'Teste 2',
          type: 'withdraw',
          category: 'Pets',
          amount: 500,
          createdAt: new Date('2022-09-02 10:00:00')
        },
        {
          id: 3,
          title: 'Teste 3',
          type: 'withdraw',
          category: 'Academia',
          amount: 550,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 4,
          title: 'Teste 4',
          type: 'withdraw',
          category: 'Investimentos',
          amount: 100,
          createdAt: new Date('2022-09-02 10:00:00')
        },
        {
          id: 5,
          title: 'Teste 5',
          type: 'withdraw',
          category: 'Educação',
          amount: 4000,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 6,
          title: 'Teste 6',
          type: 'withdraw',
          category: 'Transporte',
          amount: 1100,
          createdAt: new Date('2022-09-02 10:00:00')
        },
        {
          id: 7,
          title: 'Teste 7',
          type: 'withdraw',
          category: 'Saúde',
          amount: 600,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 8,
          title: 'Teste 8',
          type: 'withdraw',
          category: 'Alimentação',
          amount: 4200,
          createdAt: new Date('2022-09-02 10:00:00')
        },
        {
          id: 9,
          title: 'Teste 9',
          type: 'deposit',
          category: 'Extra',
          amount: 600,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 10,
          title: 'Teste 10',
          type: 'withdraw',
          category: 'Academia',
          amount: 300,
          createdAt: new Date('2022-09-02 10:00:00')
        },
        {
          id: 11,
          title: 'Teste 11',
          type: 'deposit',
          category: 'Academia',
          amount: 2000,
          createdAt: new Date('2022-09-07 06:00:00')
        },
        {
          id: 12,
          title: 'Teste 12',
          type: 'withdraw',
          category: 'Extra',
          amount: 1000,
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

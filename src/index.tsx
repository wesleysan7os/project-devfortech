import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs'

import { App } from './App'

// exemplo da URL pra consumir a API:
// fetch('http://localhost:3000/api/transactions').then()...

createServer({
  // usar o banco de dados do mirage que é do tipo Model
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = 'api'

    // quando houver uma requisição 'GET'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      //model
      return schema.create('transaction', data)
    })
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

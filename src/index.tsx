import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';

import { App } from './App';

// http://localhost:3000/api/...rotas
createServer({
  routes() {
    this.namespace = 'api';

    // quando houver uma requisição 'GET'
    this.get('/transactions', () => {
      return [
        {
          id: '',
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          created_at: new Date()
        }
      ]
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return data
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

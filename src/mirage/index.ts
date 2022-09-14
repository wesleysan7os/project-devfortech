import { createServer, Model } from 'miragejs'

export type Transaction = {
  id: string
  username: string
  password: string
  transactions: Array<string>
}
export function mirageServer() {
  return createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            usr_id: 1,
            username: 'brunosobral',
            password: '1010',
            transactions: [
              {
                trs_id: 1,
                title: 'Feelance de website',
                type: 'income',
                category: 'Dev',
                price: 6000,
                createdAt: new Date('2022-09-07 06:00:00'),
              },
              {
                trs_id: 2,
                title: 'Aluguel',
                type: 'outcome',
                category: 'Casa',
                price: 1100,
                createdAt: new Date('2022-09-02 10:00:00'),
              },
            ],
          },
          {
            usr_id: 2,
            username: 'claudetxe',
            password: '2020',
            transactions: [
              {
                trs_id: 1,
                title: 'Feelance de website',
                type: 'income',
                category: 'Dev',
                price: 6000,
                createdAt: new Date('2022-09-07 06:00:00'),
              },
              {
                trs_id: 2,
                title: 'Aluguel',
                type: 'outcome',
                category: 'Casa',
                price: 1100,
                createdAt: new Date('2022-09-02 10:00:00'),
              },
            ],
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions')
      this.get('/transactions/:id')

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
        return schema.transactions.create(data)
      })

      this.patch('/transactions/:id', (schema, request) => {
        let data = JSON.parse(request.requestBody)
        let id = request.params.id
        let transaction = schema.transactions.find(id)

        return transaction.update(data)
      })

      this.delete('/transactions/:id')
    },
  })
}

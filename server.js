// const jsonServer = require('json-server')
import jsonServer from 'json-server'
import cors from 'cors'

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3200

server.use(cors())
server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`⚡ Server running at http://localhost:${port}`)
})
const express = require('express')
const socketIO = require('socket.io')

const { createServer } = require('http')
const path = require('path')

const app = express()
const server = createServer(app)

const publicPath = path.resolve(__dirname, '../public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

// communication with the backend
const io = socketIO(server)

io.on('connection', client => {
  console.log('connected user')

  client.on('disconnect', () => {
    console.log('disconnected user')
  })
})

server.listen(port, (err) => {
  if (err) throw new Error(err)
  console.log(`server running in port ${port}`)
})

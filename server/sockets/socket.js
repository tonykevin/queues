const { io } = require('../index')

io.on('connection', client => {
  console.log('connected user')

  client.emit('sendMessage', {
    user: 'admin',
    message: 'Welcome!'
  })

  client.on('disconnect', () => {
    console.log('disconnected user')
  })

  client.on('sendMessage', (data) => {
    console.log(data)
    client.broadcast.emit('sendMessage', data)
  })
})

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

  client.on('sendMessage', (message, callback) => {
    console.log(message)

    if (message.user) {
      callback({
        res: 'everything is fine'
      })
    } else {
      callback({
        res: 'everything is wrong'
      })
    }
  })
})


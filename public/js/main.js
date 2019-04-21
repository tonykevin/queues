const socket = io()

socket.on('connect', () => {
  console.log('connected to the server.')
})

socket.on('disconnect', () => {
  console.log('we lost connection to the server')
})

socket.emit('sendMessage', {
  user: 'Tony',
  message: 'Hello world'
})

socket.on('sendMessage', message => {
  console.log('Server:', message)
})

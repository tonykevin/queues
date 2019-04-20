const socket = io()

socket.on('connect', () => {
  console.log('connected to the server.')
})

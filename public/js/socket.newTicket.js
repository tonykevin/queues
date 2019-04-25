const socket = io()

const label = $('#lblNewTicket')

socket.on('connect', () => {
  console.log('Connected to the server')
})

socket.on('disconnect', () => {
  console.log('we lost connection to the server')
})

socket.on('currentState', ({ currentTicket }) => {
  if (currentTicket) {
    label.text(`Ticket ${currentTicket}`)
  }
})

$('button').on('click', () => {
  socket.emit('nextTicket', null, (nextTicket) => {
    label.text(nextTicket)
  })
})

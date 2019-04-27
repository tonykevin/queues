const { io } = require('../')
const { TicketControl } = require('../classes')

const ticketControl = new TicketControl()

io.on('connection', client => {
  client.on('nextTicket', (data, callback) => {
    let next = ticketControl.next()
    callback(next)
  })

  client.emit('currentState', {
    currentTicket: ticketControl.lastTicket
  })

  client.on('attendTicket', (data, callback) => {
    if (!data.desktop) {
      throw new Error('El escritorio es necesario')
    }

    let attendTicket = ticketControl.attendTicket(data.desktop)
    callback(attendTicket)

    client.broadcast.emit('last4Tickets', {
      last4Tickets: ticketControl.last4Tickets
    })
  })
})

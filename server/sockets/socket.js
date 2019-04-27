const { io } = require('../')
const { TicketControl } = require('../classes')

const ticketControl = new TicketControl()

io.on('connection', client => {
  client.on('nextTicket', (data, callback) => {
    let next = ticketControl.next()
    console.log(next)
    callback(next)
  })

  client.emit('currentState', {
    currentTicket: ticketControl.lastTicket
  })

  client.on('attendTicket', (data, callback) => {
    if (!data.desktop) {
      return callback({
        err: true,
        message: 'El escritorio es necesario'
      })
    }

    let attendTicket = ticketControl.attendTicket(data.desktop)
    callback(attendTicket)
  })
})

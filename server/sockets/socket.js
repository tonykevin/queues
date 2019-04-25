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
})

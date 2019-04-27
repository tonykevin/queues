const { writeFileSync } = require('fs')
const data = require('../data/data.json')
const Ticket = require('./ticket')

class TicketControl {
  constructor () {
    this.last = 0
    this.today = new Date().getDate()
    this.tickets = []
    this.last4 = []

    if (data.today === this.today) {
      this.last = data.last
      this.tickets = data.tickets
      this.last4 = data.last4
    } else {
      this.restartCount()
    }
  }

  attendTicket (desktop) {
    if (!this.tickets.length) {
      return 'No hay tickets'
    }

    let ticketNumber = this.tickets[0].number
    this.tickets.shift()

    let attendTicket = new Ticket(desktop, ticketNumber)

    this.last4.unshift(attendTicket)

    if (this.last4.length > 4) {
      this.last4.splice(-1, 1)
    }

    this.save()

    return attendTicket
  }

  get lastTicket () {
    return this.last
  }

  get last4Tickets () {
    return this.last4
  }

  next () {
    this.last += 1
    let ticket = new Ticket(null, this.last)
    this.tickets.push(ticket)
    this.save()

    return `Ticket ${this.last}`
  }

  restartCount () {
    this.last = 0
    this.tickets = []
    this.last4 = []

    console.log('system has been initialized')
    this.save()
  }

  save () {
    let jsonData = {
      last: this.last,
      today: this.today,
      tickets: this.tickets,
      last4: this.last4
    }

    let jsonDataString = JSON.stringify(jsonData)
    writeFileSync('./server/data/data.json', jsonDataString)
  }
}

module.exports = TicketControl

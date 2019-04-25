const { writeFileSync } = require('fs')
const data = require('../data/data.json')
const Ticket = require('./ticket')

class TicketControl {
  constructor () {
    this.last = 0
    this.today = new Date().getDate()
    this.tickets = []

    if (data.today === this.today) {
      this.last = data.last
      this.tickets = data.tickets
    } else {
      this.restartCount()
    }
  }

  get lastTicket () {
    return this.last
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

    console.log('system has been initialized')
    this.save()
  }

  save () {
    let jsonData = {
      last: this.last,
      today: this.today,
      tickets: this.tickets
    }

    let jsonDataString = JSON.stringify(jsonData)
    writeFileSync('./server/data/data.json', jsonDataString)
  }
}

module.exports = TicketControl

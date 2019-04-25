const { writeFileSync } = require('fs')
const data = require('../data/data.json')

class TicketControl {
  list = 10

  constructor () {
    this.last = 0
    this.today = new Date().getDate()

    if (data.today === this.today) {
      this.last = data.last
    } else {
      this.restartCount()
    }
  }

  next () {
    this.last += 1
    this.save()

    return `Ticket ${this.last}`
  }

  restartCount () {
    this.last = 0
    console.log('system has been initialized')
    this.save()
  }

  save () {
    let jsonData = {
      last: this.last,
      today: this.today
    }

    let jsonDataString = JSON.stringify(jsonData)
    writeFileSync('./server/data/data.json', jsonDataString)
  }
}

module.exports = TicketControl

const { writeFileSync } = require('fs')
const data = require('../data/data.json')

class TicketControl {
  constructor () {
    this.last = 0
    this.today = new Date().getDate()
    console.log(data)

    if (data.today === this.today) {
      this.last = data.last
    } else {
      this.restartCount()
    }
  }

  restartCount () {
    let jsonData = {
      last: this.last,
      today: this.today
    }

    let jsonDataString = JSON.stringify(jsonData)
    writeFileSync('./server/data/data.json', jsonDataString)
    console.log('system has been initialized')
  }
}

module.exports = TicketControl

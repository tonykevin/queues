const socket = io()

const lblTickets = [
  $('#lblTicket1'),
  $('#lblTicket2'),
  $('#lblTicket3'),
  $('#lblTicket4')
]

const lblDesktops = [
  $('#lblDesktop1'),
  $('#lblDesktop2'),
  $('#lblDesktop3'),
  $('#lblDesktop4')
]

socket.on('currentState', (data) => {
  updateHtml(data.last4)
})

function updateHtml (last4) {
  for (let i = 0; i < last4.length; i++) {
    lblTickets[i].text(`Ticket ${last4[i].number}`)
    lblDesktops[i].text(`Escritorio ${last4[i].desktop}`)
  }
}

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

socket.on('last4Tickets', ({ last4Tickets }) => {
  const audio = new Audio('audio/new-ticket.mp3')
  audio.play()

  updateHtml(last4Tickets)
})

function updateHtml (last4) {
  for (let i = 0; i < last4.length; i++) {
    lblTickets[i].text(`Ticket ${last4[i].number}`)
    lblDesktops[i].text(`Escritorio ${last4[i].desktop}`)
  }
}

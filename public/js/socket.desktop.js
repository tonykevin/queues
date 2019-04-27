const socket = io()

const seachParams = new URLSearchParams(window.location.search)
const label = $('small')

if (!seachParams.has('desktop')) {
  window.location = '/'

  throw new Error('El escritorio es necesario')
}

let desktop = Number(seachParams.get('desktop'))

if (!desktop) {
  window.location = '/'

  throw new Error('El valor de escritorio no es un entero')
}

$('h1').text(`Escritorio ${desktop}`)

$('button').on('click', () => {
  socket.emit('attendTicket', { desktop }, (res) => {
    if (res === 'No hay tickets') {
      label.text(res)
      alert(res)
      return
    }

    label.text(`Ticket ${res.number}`)
  })
})

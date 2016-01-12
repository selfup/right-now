const socket = io()

socket.on('connect', () => {
  console.log('You have connected!')
})

socket.on('message', (message) => {
  console.log(message)
})

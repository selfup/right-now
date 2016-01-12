const socket = io()

socket.on('connect', () => {

})

socket.on('chat message', (message) => {
  $('.messages').append(
    `<div>
      <h3>${message.username}</h3>
      <p>${message.text}</p>
    </div>`
  )
})

$('.submit-message').on('click', (e) => {
  e.preventDefault()

  var username = $('.new-message .username').val()
  var message = $('.new-message .message').val()

  socket.send('chat message', {
    username: username,
    text: message
  })
})

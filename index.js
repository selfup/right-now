const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

io.on('connection', (socket) => {
  console.log('Someone has connected')
  socket.emit('message', 'Hello from Node!!!')
})

http.listen(process.env.PORT || 3000, () => {
  console.log('Your server is up and running on Port 3000. Good job!')
})

const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')
const redis = require('redis');
const client = redis.createClient();

client.subscribe("community");

client.on("message", (channel, message) => {
  console.log(channel, message);
  io.sockets.emit('chat message', JSON.parse(message));
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

io.on('connection', (socket) => {
  socket.on('message', (channel, message) => {
    io.sockets.emit('chat message', message)
  })
})

http.listen(process.env.PORT || 3000, () => {
  console.log('Your server is up and running on Port 3000. Good job!')
})

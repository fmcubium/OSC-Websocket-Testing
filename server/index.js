const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws')
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })


wss.on('connection', (ws) => {

  // tempLocation[0] is Latitude and tempLocation[1] is Longitude
  let tempLocation = []


  ws.on('message', async (message) => {
    parsedData = await JSON.parse(message)
    console.log(parsedData.data)
    
    ws.send(JSON.stringify({
      type: 'message',
      data: 'Server Response'
    }))
  })

})

server.listen(8080, () => {
  console.log('Listening to port 8080')
})

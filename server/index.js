const express = require('express');
const app = express();
const http = require('http');
const WebSocket = require('ws')
const server = http.createServer(app)
const wss = new WebSocket.Server({ server })


wss.on('connection', (ws) => {

  // tempLocation[0] is Latitude and tempLocation[1] is Longitude
  let tempLocation = []

  const data = {
    type: 'message',
    data: 'Hi From server'
  }

  ws.on('message', async (message) => {
    const parsedData = await JSON.parse(message)

    switch (parsedData.type) {
      case 'message':
        console.log(parsedData.data)
        break
      
      case 'location':
        tempLocation = parsedData.data
        console.log(`Lat: ${tempLocation[0]} Lon: ${tempLocation[1]}`)
        break
      
        default:
          console.log('Unrecognized type!')
    }
  })

})

server.listen(8080, () => {
  console.log('Listening to port 8080')
})

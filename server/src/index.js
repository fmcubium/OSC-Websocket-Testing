const express = require('express');
const app = express();
// const http = require('http');
const WebSocket = require('ws')
const server = require('http').createServer(app)
const wss = require('socket.io')(server, {
  //remove cors when done with development
  cors: {
    origin: "http://localhost:3000"
  }
})


app.post('/message/new', (req, res) => {
  
})

wss.on('connection', (ws) => {
  // tempLocation[0] is Latitude and tempLocation[1] is Longitude
  let tempLocation = []

  const data = {
    type: 'message', 
    data: 'Hi From server'
  }

  ws.on('message_get', async (message) => {
    const parsedData = await JSON.parse(message)

    switch (parsedData.type) {
      case 'message':
        console.log(parsedData.data) // Store in db
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

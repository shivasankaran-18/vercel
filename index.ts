import express from 'express'
import { WebSocket, WebSocketServer } from 'ws'

const app = express()

app.get("/",(req,res)=>{
  return res.json({msg:"done"})
})

const httpServer = app.listen(8080)

// const wss = new WebSocketServer({ server: httpServer });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function (data, isBinary) {
//     wss.clients.forEach(function (client) {
//       if (client.readyState === WebSocket.OPEN) {
    
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });

//   ws.send('Hello! Message From Server!!');
// });

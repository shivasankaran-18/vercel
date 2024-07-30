import express from 'express'
import { WebSocket, WebSocketServer } from 'ws'

const app = express()

app.get("/test",(req,res)=>{
  return res.json({msg:"get"})
})


app.post("/test",(req,res)=>{
  return res.json({msg:"post"})
})
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()

app.get("/", (req,res)=>{
  res.status(200).json({mssg:"hola mundo!"})
})

app.listen(process.env.PORT, ()=>{
  console.log("server listening on port:",process.env.PORT)
})
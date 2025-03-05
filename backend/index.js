import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./db/connectDB.js"
import authRoute from "./routes/authRoutes.js"

dotenv.config()

const app = express()

//middlewares
app.use(express.json()) // allows us to parse incoming requests:req.body
app.use((req,res,next)=>{
  console.log(req.method, req.path)
  next()  
})

// Routes
app.use("/api/auth", authRoute)

// Server & Database connection
app.listen(process.env.PORT, ()=>{
  console.log("server listening on port:",process.env.PORT)
  connectDB()
})
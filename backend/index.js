import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./db/connectDB.js"
import authRoute from "./routes/authRoutes.js"

dotenv.config()

const app = express()

// Routes
app.use("/api/auth", authRoute)

// Server & Database connection
app.listen(process.env.PORT, ()=>{
  console.log("server listening on port:",process.env.PORT)
  connectDB()
})
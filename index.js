import express, { urlencoded } from "express"
import { config } from "dotenv"
import connectDB from "./config/db.js"
import router from "./routes/User.js"
import cookieParser from "cookie-parser"


const app=express()
config({path:"./config/config.env"})
connectDB()

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1",router)


app.listen(4000,()=>{
    console.log("Server is Listening on port 4000")
})
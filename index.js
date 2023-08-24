import express from "express"
import { config } from "dotenv"
import connectDB from "./config/db.js"


const app=express()
config({path:"./config/config.env"})
connectDB()


app.listen(4000,()=>{
    console.log("Server is Listening on port 4000")
})
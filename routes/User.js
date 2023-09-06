import express from "express"
import { AddaUser, Login, SignUp } from "../controllers/User.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router=express.Router()

router.post("/signup",SignUp)
router.post("/login",Login)

router.post("/addaUser",isAuthenticated,AddaUser)


export default router
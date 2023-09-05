import { User } from "../models/User.js"

export const Login=async(req,res,next)=>{
    try {
        const {username,password}=req.body
        if(!username || !password)
        {
            return res.status(400).json({
                success:false,
                message:"Fill the required details"
            })
        }

        let user=await User.findOne({username})

        if(!user)
        {
            return res.status(400).json({
                success:false,
                message:"User doesn't exists"
            })
        }

        res.status(200).json({
            success:true,
            user
        })




    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
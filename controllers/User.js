import { User } from "../models/User.js";

export const SignUp=async(req,res,next)=>{
    try {
        const {username,password,user_level}=req.body

        let user=await User.findOne({username})
        if (user) {
            return res.status(400).json({
              success: false,
              message: "User already exists",
            });
          }

          user = await User.create({
            username,
            password,
            user_level
          });

          res.status(200).json({
            success: true,
            user,
          });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
          });
    }
}


export const Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Fill the required details",
      });
    }

    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exists",
      });
    }

    let token = await user.generateToken();

    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const AddaUser = async (req, res, next) => {
  try {
    const { username, password, user_level, image } = req.body;


    if(req.user.user_level!=="Superuser")
    {
        return res.status(200).json({
            success:false,
            message:"You are not authorised admin"
        })
    }

    await User.create({
      username,
      password,
      user_level,
      image,
    });

    res.status(200).json({
        success:true,
        message:"User Added"
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

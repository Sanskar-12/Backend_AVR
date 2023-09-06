import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_level: {
    type: String,
    enum: [
      "Superuser",
      "Approval",
      "Verifier",
      "InstituteSuperuser",
      "Intiator",
    ],
    default: "Superuser",
  },
  image: {
    type: String,
  },
  institute_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.methods.generateToken=function(){
  console.log(this._id)
  return jwt.sign({_id:this._id},process.env.JWT_SECRET)
}

export const User = mongoose.model("User", userSchema);


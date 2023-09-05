import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);


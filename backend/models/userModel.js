import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  email:{
    typeof: String,
    required: true,
    unique: true
  },
  password:{
    typeof: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
  lastLogin:{
    type: Date,
    default: Date.now
  },
  isVerified:{
    type: Boolean,
    default: false
  },
  resetPasswordToken: String,
  resetPasswordExpiresAt: Date,
  verificationToken: String,
  verificationTokenExpiresAt: Date
},{timestamps: true})

// whits timestamps createdAt and updateAt will be automatically updated.

export const User = mongoose.model("User", userSchema)
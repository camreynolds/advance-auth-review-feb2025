import {User} from "../models/userModel.js"
import bcryptjs from "bcryptjs"
import {generateTokenAndSetCookie} from "../utils/generateTokenAndSetCookie.js"
import { sendVerificationEmail } from "../mailtrap/emails.js"

export const signup = async (req,res) =>{
  const {name,email,password} = req.body
  try{
    if(!email || !password || !name){
      throw new Error("All fields are required.")
    }

    const userAlreadyExist = await User.findOne({email})

    if(userAlreadyExist){
      return res.status(400).json({success: false, error: "User already exists."})
    }

    const hashedPassword = await bcryptjs.hash(password,10)
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString()

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    })

    await user.save()

    console.log("User:",user)    

    // jwt
    generateTokenAndSetCookie(res,user._id)

    // send verification email
    await sendVerificationEmail(user.email,verificationToken)

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user:{
        ...user._doc,
        password: undefined
      }
    })

  }catch(error){
    res.status(400).json({success:false, error:error.message})
  }
}
export const login = async (req,res) =>{
  res.status(200).json({mssg: "login"})
}
export const logout = async (req,res) =>{
  res.status(200).json({mssg: "logout"})
}
export const signup = async (req,res) =>{
  res.status(200).json({mssg: "signup"})
}
export const login = async (req,res) =>{
  res.status(200).json({mssg: "login"})
}
export const logout = async (req,res) =>{
  res.status(200).json({mssg: "logout"})
}
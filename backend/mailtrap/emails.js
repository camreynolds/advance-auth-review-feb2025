import { client,sender} from "../mailtrap/mailtrapConfig.js"
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"

export const sendVerificationEmail = async (email,verificationToken) =>{
  const recipient = [{email}]

  try{
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify your email.",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
      category: "Email verification"
    })

    console.log("Email send successfully!")
    
  }catch(error){
    console.error("Error sending verification email:",error)    
    throw new Error(`Error sending verification email:${error}`)
  }
}

export const sendWelcomeEmail = async (email,name) =>{
  const recipient = [{email}]

  try{
    const response = await client.send({
      from: sender,
      to: recipient,
      template_uuid: process.env.TEMPLATE_UUID,
      template_variables: {
        company_info_name: "Auth Company",
        name: name
      }
    })

    console.log("Welcome email send successfully", response)    
  }catch(error){
    console.error("Error sending welcome email", error)    
    throw new Error(`Error sending welcome email: ${error}`)
  }
}
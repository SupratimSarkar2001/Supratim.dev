"use server"
import { signIn, signOut } from "./auth"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export const handleGithubLogin = async () => {
 "use server"
  await signIn("github");
}

export const handleLogout = async () => {
 "use server"
  await signOut();
}

export const register= async(prevSatet,formData)=>{
  const {username,email,password,passwordRepeat}=Object.fromEntries(formData);
  if(password !== passwordRepeat){
    return {error: "Passwords do not match"};
  }

  try{
    connectToDb();

    const user = await User.findOne({email});
    if(user){
      return {error: "User already exists"};
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password:hashedPassword
    })

    await newUser.save();
    console.log(newUser, "save to db");
    return {success: true};
  }
  catch(error){
    return {error: "Failed to connect to database"};
  }
}

export const login = async (prevSatet,formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid email or password" };
    }
    throw err;
  }
};
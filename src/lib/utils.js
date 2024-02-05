import mongoose from "mongoose";

const connection ={};
export const connectToDb=async()=>{
 try{
  if(connection.isConnected){
    console.log('Using existing database connection');
    return;
  }

  const db= await mongoose.connect(process.env.MONGO);
  connection.isConnected=db.connections[0].readyState;
  console.log('Database connected');
 } catch(error){
  console.log(error);
  throw new Error('Failed to connect to database',error);
 }
}
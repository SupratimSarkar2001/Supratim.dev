import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET= async ()=>{
 try{
    connectToDb();
    const posts= await Post.find();
    return NextResponse.json(posts);
 }
 catch(error){
  console.log(error);
  return new Error("There is not blog present");
 }
}

export const POST= async (request)=>{
 try{
    connectToDb();
    const body = await request.json();
    const post = await Post.create(body);
    revalidatePath("/blog");
    return NextResponse.json(post);
 }
 catch(error){
  console.log(error);
  return new Error("Unable to create blog");
 }
}
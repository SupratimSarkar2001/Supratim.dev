import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PUT = async (request,{params})=>{
  try{
   connectToDb();
    const body = await request.json();
    const {slug} = params;
    const post = await Post.findOneAndUpdate({slug},body);
    revalidatePath("/blog");
    return NextResponse.json(post);
  }
  catch(error){
   console.log(error);
   return new Error("Unable to update blog");
  }
}

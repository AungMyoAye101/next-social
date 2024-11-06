import { NextResponse } from "next/server";
import { connectToDb } from "@/lib/connectToDb";
import Post from "@/lib/model/Post";
export const GET = async () => {
  try {
    await connectToDb();
    const post = await Post.find({}).populate("author");

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompt data", { status: 500 });
  }
};

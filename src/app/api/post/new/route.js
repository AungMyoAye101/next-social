import { connectToDb } from "@/lib/connectToDb";
import Post from "@/lib/model/Post";

export const POST = async (req) => {
  const { userId, post, image } = await req.json();
  console.log(userId, post);
  try {
    await connectToDb();
    const newPost = new Post({
      author: userId,
      post,
      image,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new post ", {
      status: 500,
    });
  }
};

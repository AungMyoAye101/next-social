import { connectToDb } from "@/lib/connectToDb";
import Post from "@/lib/model/Post";

export const POST = async (req) => {
  const { userId, title } = await req.json();
  console.log(userId, title);
  try {
    await connectToDb();
    await Post.create({
      author,
      title,
      image,
    });
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create a new post ", {
      status: 500,
    });
  }
};

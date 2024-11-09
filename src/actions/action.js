"use server";

import { auth } from "@/auth";
import { connectToDb } from "@/lib/connectToDb";
import Post from "@/lib/model/Post";
import { User } from "@/lib/model/User";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { z } from "zod";

// create user
export const createUser = async (preState, data) => {
  const name = data.get("name");
  const email = data.get("email");
  const password = data.get("password");
  const schema = z.object({
    name: z.string().min(2),
    email: z.string().min(3),
    password: z.string().min(6),
  });

  const parseData = schema.safeParse({ name, email, password });

  if (!parseData.success) {
    return { message: "Failed to create user" };
  }

  let redirectPath;

  try {
    const res = await fetch(`${process.env.URL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: parseData.data.name,
        email: parseData.data.email,
        password: parseData.data.password,
      }),
    });
    redirectPath = "/login";
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to create user.",
    };
  } finally {
    if (redirectPath) redirect(redirectPath);
  }
};

export const getUser = async () => {
  const session = await auth();
  let user;
  try {
    connectToDb();
    const res = await User.findOne({ email: session?.user?.email }).lean();
    if (res) {
      user = {
        ...res,
        _id: res._id.toString(),
      };
      delete user.__v;
    }
  } catch (error) {
    console.error("Unable to fetch User:", error);
    return new NextResponse("Unable to fetch User", { status: 500 });
  }
  return user;
};

// export const submitPost = async (formData) => {
//   const post = formData.get("post");
//   const image = formData.get("image");
//   if (post && post.length < 3) return;

//   try {
//     connectToDb();
//     const res = await fetch(`${process.env.URL}/api/post/new`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ post, image }),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createPost = async (formData) => {
  const session = await auth();
  const title = formData.get("title");
  try {
    await connectToDb();
    const user = await User.find({ email: session.user.email });
    const res = await fetch(`${process.env.URL}/api/post/new`, {
      method: "POST",
      body: JSON.stringify({
        userId: user._id,
        title,
      }),
    });
    console.log(res);
  } catch (error) {}
};

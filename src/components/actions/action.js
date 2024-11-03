"use server";

import { auth } from "@/auth";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/model/User";
import { useSession } from "next-auth/react";
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
    return { message: "Failed to create todo" };
  }

  try {
    const res = await fetch("http://localhost:3000/api/register", {
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
    revalidatePath("/");
    redirect("/");

    return { message: "Created user" };
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to create user.",
    };
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
    console.log(user);
  } catch (error) {
    console.error("Unable to fetch User:", error);
    return new NextResponse("Unable to fetch User", { status: 500 });
  }
  return user;
};

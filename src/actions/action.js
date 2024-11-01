"use server";

import { auth } from "@/auth";
import { connectToDb } from "@/lib/connectToDb";
import { User } from "@/lib/model/User";
import { audio } from "framer-motion/client";
import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// export const submitHandler = async (data: FormData) => {
//   const name = data.get("name") as string;
//   const email = data.get("email") as string;
//   const password = data.get("password") as string;
//   console.log("submited" + name, email, password);
//   const userExit = await User.findOne({ email });
//   const hasedPassword = await bcrypt.hash(password, 10);
//   try {
//     await connectToDb();
//     if (userExit) {
//       console.log("user Exited");
//     } else {
//       await User.create({ name, email, password: hasedPassword });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

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

"use server";
import { connectToDb } from "@/lib/connectToDb";
import User from "@/lib/model/User";
import bcrypt from "bcryptjs";
export const submitHandler = async (data: FormData) => {
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  console.log("submited" + name, email, password);
  const userExit = await User.findOne({ email });
  const hasedPassword = await bcrypt.hash(password, 10);
  try {
    await connectToDb();
    if (userExit) {
      console.log("user Exited");
    } else {
      await User.create({ name, email, password: hasedPassword });
    }
  } catch (error) {
    console.log(error);
  }
};

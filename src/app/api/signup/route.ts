import User from "@/lib/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

async function POST(req: any) {
  const newUser = await req.json();
  console.log(newUser);

  const { name, email, password } = newUser;
  if (!name || !email || !password) {
    return new NextResponse("All fields are required.", { status: 400 });
  }

  const userExit = await User.findOne({ email: newUser.email });

  if (userExit) {
    return new NextResponse("User already exit.", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json(user);
}

"use server";

import { User } from "@/lib/model/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDb } from "@/lib/connectToDb";

export const POST = async (request: any) => {
  const { name, email, password } = await request.json();

  //connect to db

  connectToDb();
  console.log(name);

  if (!name || !email || !password) {
    return new NextResponse("All fields are required.", { status: 400 });
  }

  const userExit = await User.findOne({ email });

  if (userExit) {
    return new NextResponse("User already exit.", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return new NextResponse("Failed to create user", { status: 500 });
  }

  return new NextResponse("User successfully created", { status: 201 });
};

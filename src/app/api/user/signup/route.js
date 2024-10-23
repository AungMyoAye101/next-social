import { NextResponse } from "next/server";
import { connectDb } from "@/lib/db";
import User from "@/model/user";

export async function POST(req) {
  const { name, email, password } = await req.json();
  try {
    await connectDb();
    const newUser = await User.create({
      name,
      email,
      password,
    });
    await newUser.save();
    return NextResponse.json(
      { message: "new user successfully created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occur in create new user" },
      { status: 500 }
    );
  }
}

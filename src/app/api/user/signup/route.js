import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    console.log(name, email, password);
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

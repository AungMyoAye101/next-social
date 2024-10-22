import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
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

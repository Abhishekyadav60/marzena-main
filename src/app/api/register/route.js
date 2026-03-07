
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/app/api/models/User";

export async function POST(req) {
  try {
    console.log("---- REGISTER API HIT ----");

    const body = await req.json();
    console.log("BODY:", body);

    const { name, email, password } = body;

    await dbConnect();
    console.log("DB CONNECTED");

    const existingUser = await User.findOne({ email });
    console.log("EXISTING USER:", existingUser);

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("PASSWORD HASHED");

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log("USER CREATED:", newUser);

    return NextResponse.json({ message: "User registered successfully" });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

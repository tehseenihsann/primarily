import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma"; // adjust path to your prisma client
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { displayName, email, password } = body;

    if (!email || !password || !displayName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        displayName,
        role: "user",
        team: {
          create: {
            name: `${displayName}'s Team`, // or use default like "New Team"
          },
        },
      },
    });


    return NextResponse.json({ message: "User created", userId: newUser.id });
  } catch (error) {
    console.error("API Error /register:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

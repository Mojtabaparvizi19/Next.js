import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body: { email: string; password: string } = await request.json();
  const validator = schema.safeParse(body);

  console.log(body.email);

  if (!validator.success) {
    return NextResponse.json(validator.error.errors, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user) {
    return NextResponse.json({ error: "user already exist" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email });
}

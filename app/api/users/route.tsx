// a function that handles HTTP request
import prisma from "@/prisma/client";
import schema from "./schema";

export interface BodyProp {
  name: string;
  price: number;
  email: string;
}

import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body: BodyProp = await request.json();
  const validate = schema.safeParse(body);
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 });
  }

  const isCurrentUser = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (isCurrentUser) {
    return NextResponse.json(
      {
        error: "this user is already registered!",
      },
      {
        status: 400,
      }
    );
  }

  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      followers: 2,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}

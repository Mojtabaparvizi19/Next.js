import { NextRequest, NextResponse } from "next/server";
import { BodyProp } from "../route";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  // Fetch data from db
  // not found => return a 404  error.
  // return a data

  // if (id > 10) {
  //   return NextResponse.json(
  //     { error: "user not found" },
  //     {
  //       status: 404,
  //     }
  //   );
  // }

  // return NextResponse.json({
  //   id: 1,
  //   name: "Mojtaba",
  // });

  const userToGet = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!userToGet) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json([userToGet]);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  //validate request body
  // if invalid, return 400

  // if (!body.name) {
  //   return NextResponse.json({ error: "enter the name" }, { status: 400 });
  // }

  //fetch the user
  //(!id) => 404

  // if (id > 10) {
  //   return NextResponse.json({ error: "id not found nigga" }, { status: 404 });
  // }
  // return the object

  // return NextResponse.json({ id, name: body.name }, { status: 200 });

  const body: BodyProp = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const userToUpdate = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!userToUpdate) {
    return NextResponse.json({ error: "User does not exist" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userToUpdate.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 201 });
}

export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (parseInt(id) != 1) {
    return NextResponse.json({ error: "Id not valid" }, { status: 404 });
  }
  // else find the data => remove it
  return NextResponse.json(
    { success: "Object has been deleted!" },
    { status: 200 }
  );
}

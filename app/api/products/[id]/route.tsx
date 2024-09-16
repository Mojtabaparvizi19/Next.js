import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export interface ProducProps {
  category: string;
  name: string;
  price: number;
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const itemToFind = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!itemToFind) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  return NextResponse.json(itemToFind, { status: 201 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const itemToUpdate = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!itemToUpdate) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  const body: ProducProps = await request.json();
  const validator = productSchema.safeParse(body);
  if (!validator.success) {
    return NextResponse.json(validator.error.errors, { status: 400 });
  }

  await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      category: body.category,
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json({ success: "Item updated" }, { status: 201 });
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const itemToFind = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!itemToFind) {
    return NextResponse.json({ error: "item not found" }, { status: 404 });
  }

  await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({ success: "item deleted" }, { status: 201 });
}

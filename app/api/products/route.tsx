import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ProducProps } from "./[id]/route";
import productSchema from "./schema";

export async function GET(request: NextRequest) {
  const allProduct = await prisma.product.findMany();
  return NextResponse.json(allProduct, { status: 201 });
}

export async function POST(request: NextRequest) {
  const body: ProducProps = await request.json();
  const validator = productSchema.safeParse(body);

  if (!validator.success) {
    return NextResponse.json(validator.error.errors, { status: 400 });
  }

  const newItem = await prisma.product.create({
    data: {
      name: body.name,
      category: body.category,
      price: body.price,
    },
  });

  return NextResponse.json(newItem, { status: 201 });
}

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { allProduct } from "../route";
import { BodyProp } from "../../users/route";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "Id not valid" }, { status: 404 });
  }

  const item = allProduct.find((item) => item.id == id);
  console.log(item);

  return NextResponse.json(item, { status: 200 });
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body: BodyProp = await request.json();

  console.log(body.name);
  const validator = schema.safeParse(body);
  if (!validator.success) {
    return NextResponse.json(validator.error.errors, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "Wrong id" }, { status: 404 });
  }
  const item = allProduct.find((item) => item.id == id);
  console.log(item);
  if (item) {
    item.name = body.name;
    item.price = body.price;
  }

  return NextResponse.json(item, { status: 200 });
}

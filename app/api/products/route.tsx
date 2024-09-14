import { NextRequest, NextResponse } from "next/server";

export const allProduct = [
  { id: 1, name: "Milk", price: 2.5 },
  {
    id: 2,
    name: "bread",
    price: 3.5,
  },
];

export function GET(request: NextRequest) {
  return NextResponse.json(allProduct);
}

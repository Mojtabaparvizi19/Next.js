// a function that handles HTTP request

const users = [
  {
    id: 1,
    name: "kyle",
  },
  {
    id: 2,
    name: "Json",
  },
];

import { NextRequest, NextResponse } from "next/server";
export function GET(request: NextRequest) {
  return NextResponse.json(users);
}

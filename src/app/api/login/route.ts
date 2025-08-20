
import { NextResponse } from "next/server";

const testUser = {
  id: "1",
  email: "abc@gmail.com"
};

export async function GET(req: Request) {
  return NextResponse.json({ user: testUser }, { status: 200 });
}

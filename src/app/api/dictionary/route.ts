
import { getDictionary } from "@/lib/dictionary"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const locale = request.headers.get('x-locale') || 'en'
  const dictionary = await getDictionary("en")
  return NextResponse.json(dictionary)
}
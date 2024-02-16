import { NextResponse } from "next/server";
import blogs from "@/data/blogs.json";

export async function GET() {
  await new Promise((res) => setTimeout(res, 1000));
  return NextResponse.json({ data: blogs });
}

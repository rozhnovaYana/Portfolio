import { NextResponse } from "next/server";
import portfolios from "@/data/portfolios.json";

export async function GET() {
  await new Promise((res) => setTimeout(res, 1000));
  return NextResponse.json({ data: portfolios });
}

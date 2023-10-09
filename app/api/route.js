import { NextResponse } from "next/server";
import newsposts from "@/json/newsposts.json";

export async function GET() {
  return NextResponse.json({ newsposts: newsposts });
}

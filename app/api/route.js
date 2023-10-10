import { NextResponse } from "next/server";
import newsposts from "@/json/newsposts.json";

export async function GET() {
  const filtered = newsposts
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, 4);
  return NextResponse.json({ newsposts: filtered });
}

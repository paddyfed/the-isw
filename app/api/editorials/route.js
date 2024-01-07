import { getEditorialTitles } from "@/app/utils/editorialHelpers";
import { NextResponse } from "next/server";

export async function GET() {
  const result = await getEditorialTitles();

  return NextResponse.json(result);
}

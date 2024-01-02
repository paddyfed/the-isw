import { NextResponse } from "next/server";
import { getLatestEditorial } from "@/app/utils/editorialHelpers";

export async function GET(request) {
  const data = await getLatestEditorial();

  const ex = await NextResponse.json({ data });

  return ex;
}

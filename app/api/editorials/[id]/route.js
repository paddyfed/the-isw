import { NextResponse } from "next/server";
import { getEditorial } from "@/app/utils/editorialHelpers";

export async function GET(request, { params }) {
  const data = await getEditorial(params.id);

  const ex = await NextResponse.json({ data });

  return ex;
}

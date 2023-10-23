import { NextResponse } from "next/server";
import { getAllPostsData } from "@/app/utils/postsHelpers";

export async function GET(request, { params }) {
  const date = params.YearMonth;

  const data = await getAllPostsData();

  const filtered = data.filter(
    (entry) => entry.date.slice(0, 7) === date.slice(0, 7)
  );

  const ex = await NextResponse.json({ filtered });

  return ex;
}

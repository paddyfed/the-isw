import { getSortedPostsData } from "@/app/utils/postsHelpers";
import { NextResponse } from "next/server";
// const result = { Hello: "there" };

export async function GET() {
  const result = await getSortedPostsData();
  return NextResponse.json(result);
}

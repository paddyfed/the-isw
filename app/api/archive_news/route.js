import { getAllPostsData } from "@/app/utils/postsHelpers";
import { NextResponse } from "next/server";
// const result = { Hello: "there" };

export async function GET() {
  const result = await getAllPostsData();
  return NextResponse.json(result);
}

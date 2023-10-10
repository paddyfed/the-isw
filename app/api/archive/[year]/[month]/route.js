import { NextResponse } from "next/server";
import newsposts from "@/json/newsposts.json";

export async function GET(request, { params }) {
  const year = +params.year;
  const month = +params.month;

  console.log(year, month);

  const filtered = newsposts.filter((post) => {
    const date = new Date(post.date);

    console.log(date, date.getMonth() + 1, date.getFullYear());

    return date.getMonth() + 1 === month && date.getFullYear() === year;
  });
  return NextResponse.json({ newsposts: filtered });
}

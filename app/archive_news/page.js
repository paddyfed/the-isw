import { getPostsArchiveIndex } from "../utils/postsHelpers";
import Link from "next/link";
import pageStyles from "./page.module.css";

const inputArray = await getPostsArchiveIndex();

const hellow = inputArray.reduce((acc, curr) => {
  const yearObject = acc.find((item) => item.year === curr.year);
  if (yearObject) {
    yearObject.months.push(curr.month);
  } else {
    acc.push({ months: [curr.month], year: curr.year });
  }
  return acc;
}, []);

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export default async function NewsArchive() {
  return (
    <>
      <h1>News Archives</h1>
      {hellow.map((item) => (
        <article key={item.year} className={pageStyles.archiveGrid}>
          <h2 className={pageStyles.archiveYear}>{item.year}</h2>
          {item.months.map((month) => {
            const newMonth = month + 1 > 10 ? month + 1 : `0${month + 1}`;
            const monthText = getMonthName(month + 1);
            return (
              <span
                key={newMonth}
                className={`pageStyles.archiveMonth${newMonth}`}
              >
                <Link href={`/archive_news/${item.year}-${newMonth}`}>
                  {monthText}
                </Link>
              </span>
            );
          })}
        </article>
      ))}
    </>
  );
}

import { getPostsArchiveIndex } from "../utils/postsHelpers";
import Link from "next/link";
const hellow = await getPostsArchiveIndex();
export default async function NewsArchive() {
  return (
    <>
      {hellow.map(({ month, year }) => {
        const newMonth = month + 1 > 10 ? month + 1 : `0${month + 1}`;
        return (
          <p key={`${year}${newMonth}`}>
            <Link href={`/archive_news/${year}-${newMonth}`}>
              {year} {newMonth}
            </Link>
          </p>
        );
      })}
    </>
  );
}

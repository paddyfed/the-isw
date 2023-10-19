import { getPostsArchiveIndex } from "../utils/postsHelpers";
const hellow = await getPostsArchiveIndex();
export default async function NewsArchive() {
  return (
    <>
      {hellow.map(({ month, year }) => {
        return (
          <p key={`${year}${month}`}>
            {year} {month + 1}
          </p>
        );
      })}
    </>
  );
}

import { getData } from "@/app/utils/apiHelpers";
import { LongDateFormat } from "@/app/components/dateComponents";

export default async function ArchiveNewsYearMonth({ params }) {
  const api = `https://www.anapioficeandfire.com/api/characters`;
  const allPostsData = await getData(api);

  console.log("allpostsdata", allPostsData);
  if (allPostsData.filtered.length === 0) return `No Data for Today`;

  return (
    <>
      {allPostsData.map(({ id, date, contentHtml }) => (
        <article key={id}>
          <h1>{LongDateFormat(date)}</h1>
          {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
        </article>
      ))}
    </>
  );
}

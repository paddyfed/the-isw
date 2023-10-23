import { LongDateFormat } from "./components/dateComponents";
import { getData } from "./utils/apiHelpers";

const api = `https://www.anapioficeandfire.com/api/characters`;

// const allPostsData = await getSortedPostsData();

export default async function Home() {
  const allPostsData = await getData(api);

  return (
    <>
      <h1>Updates</h1>

      {allPostsData.length > 0 ? (
        // If filterdPostsData. length is greater than 0 then display them
        <>
          {allPostsData.map(({ id, date, contentHtml }) => (
            <article key={id}>
              <h1>{LongDateFormat(date)}</h1>
              {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
            </article>
          ))}
        </>
      ) : (
        // Otherwise just show a notice that there are No Results
        <div>No Results</div>
      )}
    </>
  );
}

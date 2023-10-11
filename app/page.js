import Image from "next/image";
import { getData } from "./utils/apiHelpers";
import { LongDateFormat } from "./components/dateComponents";
import { getSortedPostsData, getPostData } from "./utils/postsHelpers";
import Link from "next/link";

const allPostsData = await getSortedPostsData();

export default async function Home() {
  const api = `${process.env.API_URL}api/`;

  const data = await getData(api);

  return (
    <>
      <h1>Updates</h1>

      {allPostsData.length > 0 ? (
        // If filterdPostsData. length is greater than 0 then display them
        <ul>
          {allPostsData.map(({ id, date, contentHtml }) => (
            <li key={id}>
              <div>{date}</div>
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </li>
          ))}
        </ul>
      ) : (
        // Otherwise just show a notice that there are No Results
        <div>No Results</div>
      )}
    </>
  );
}

// const archiveNews = await getArchiveNewsIndexItems();
// const archiveNews = ["2000", "2001"];

import { getArchiveNewsIndexItems } from "../utils/postsHelpers";

const archiveNews = await getArchiveNewsIndexItems();

export default function ArchiveNews() {
  return (
    <>
      <h1>News archives</h1>
      {archiveNews.map((fname) => {
        return <h2 key={fname}>{fname}</h2>;
      })}
    </>
  );
}

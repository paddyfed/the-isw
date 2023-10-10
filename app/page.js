import Image from "next/image";
import { getData } from "./utils/apiHelpers";
import { LongDateFormat } from "./components/dateComponents";

export default async function Home() {
  const api = `https://www.anapioficeandfire.com/api/characters`;

  const data = await getData(api);

  return (
    <>
      <h1>Updates</h1>
      {data.map((x) => {
        return (
          <article key={x.id}>
            <h1>
              <time dateTime={x.date}>{LongDateFormat(x.date)}</time>
            </h1>
            {/* {x.entry.map((y, index) => {
              return <p key={index}>{y}</p>;
            })} */}
          </article>
        );
      })}
    </>
  );
}

import { getData } from "@/app/utils/apiHelpers";
import { LongDateFormat } from "@/app/components/dateComponents";
import Link from "next/link";

const api = `${process.env.API_URL}/api/editorials/latest`;
const latestEditorialData = await getData(api);

const editorialListApi = `${process.env.API_URL}/api/editorials`;
const editorialList = await getData(editorialListApi);

export default function Editorials() {
  return (
    <>
      <h1>Editorial</h1>
      <h2>{latestEditorialData.data.title}</h2>
      <p>{`By ${latestEditorialData.data.author}, ${LongDateFormat(
        latestEditorialData.data.date
      )}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: latestEditorialData.data.contentHtml,
        }}
      />
      <h2>Previous Editorials</h2>

      <section className="previous-editorials">
        {editorialList.map((listItem) => {
          return (
            <p key={listItem.id}>
              <b>
                <Link href={`/editorials/${listItem.id}`}>
                  {listItem.title}
                </Link>
              </b>
              <span style={{ justifySelf: "left" }}>{listItem.author}</span>
              <time dateTime={listItem.date} style={{ justifySelf: "left" }}>
                {LongDateFormat(listItem.date)}
              </time>
            </p>
          );
        })}
      </section>
    </>
  );
}

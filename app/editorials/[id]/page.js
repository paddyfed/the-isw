import { getData } from "@/app/utils/apiHelpers";
import { LongDateFormat } from "@/app/components/dateComponents";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function EditorialPost({ params }) {
  const api = `${process.env.API_URL}/api/editorials/${params.id}`;
  let editorialData;
  try {
    editorialData = await getData(api);
  } catch (error) {
    return notFound();
  }

  const editorialListApi = `${process.env.API_URL}/api/editorials`;
  const editorialList = await getData(editorialListApi);

  return (
    <>
      <h1>Editorial</h1>
      <h2>{editorialData.data.title}</h2>
      <p>{`By ${editorialData.data.author}, ${LongDateFormat(
        editorialData.data.date
      )}`}</p>
      <div
        dangerouslySetInnerHTML={{ __html: editorialData.data.contentHtml }}
      />
      <h2>Previous Editorials</h2>
      <section className="previous-editorials">
        {editorialList.map((listItem) => {
          return (
            <p key={listItem.id}>
              <b>
                <Link href={listItem.id}>{listItem.title}</Link>
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

import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./utils/apiHelpers";
import { LongDateFormat } from "./components/dateComponents";

export default async function Home() {
  const api = `${process.env.API_URL}api/`;

  const data = await getData(api);

  return (
    <main className={styles.main}>
      {data.newsposts.map((x) => {
        return (
          <article key={x.id}>
            <h1>
              <time dateTime={x.date}>{LongDateFormat(x.date)}</time>
            </h1>
            {x.entry.map((y, index) => {
              return <p key={index}>{y}</p>;
            })}
          </article>
        );
      })}
    </main>
  );
}

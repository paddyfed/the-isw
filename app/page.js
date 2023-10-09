import Image from "next/image";
import styles from "./page.module.css";
import { getData } from "./utils/apiHelpers";

export default async function Home() {
  const api = `${process.env.API_URL}api/`;

  const data = await getData(api);

  console.log(api);
  console.log(data);

  return (
    <main className={styles.main}>
      {data.newsposts.map((x) => {
        return (
          <article key={x.id}>
            <h1>
              <time dateTime={x.date}>{x.date}</time>
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

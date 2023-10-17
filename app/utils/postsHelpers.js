import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getArchiveNewsIndexItems() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = Promise.all(
    fileNames.map(async (fileName) => {
      return {
        fileName,
      };
    })
  );

  console.log(allPostsData);

  //   console.log(allPostsData);
  // Sort posts by date, slice(0,50) will only return the latest 50 posts
  return await allPostsData;
}

export function thisIsATest() {
  return <>test</>;
}

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      // console.log(contentHtml);

      // Combine the data with the id
      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );

  //   console.log(allPostsData);
  // Sort posts by date, slice(0,50) will only return the latest 50 posts
  return (await allPostsData)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 4);
}

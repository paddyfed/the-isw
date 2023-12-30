import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const editorialsDirectory = path.join(process.cwd(), "editorials");

export async function getEditorialTitles() {
  // Getfilenames under /editorials
  const fileNames = fs.readdirSync(editorialsDirectory);
  const allEditorialData = Promise.all(
    fileNames.map(async (fileName) => {
      // Remove .md from file to get id
      const id = fileName.replace(/\.md$/, "");
      return {
        id,
      };
    })
  );

  return await allEditorialData;
}

export async function getEditorial(id) {
  const editorialPath = path.join(editorialsDirectory, `${id}.md`);

  const fileContents = fs.readFileSync(editorialPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { contentHtml, ...matterResult.data };
}

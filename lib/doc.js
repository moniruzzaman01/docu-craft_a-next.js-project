import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  const fileNames = fs.readdirSync(contentDirectory);

  const allDocumnets = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocumnets.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    }
    if (a.order > b.order) {
      return 1;
    }
    return 0;
  });
}

export async function getDocumentContent(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getAuthorsContent(author) {
  // console.log("author", author);
  const fileNames = fs.readdirSync(contentDirectory);

  const authorsDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    // const processedContent = await remark()
    //   .use(html)
    //   .process(matterResult.content);
    // const contentHtml = processedContent.toString();
    // console.log(matterResult.data, author);
    if (matterResult.data.author == author) {
      return {
        id,
        ...matterResult.data,
        // contentHtml,
      };
    }
  });
  // console.log(
  //   "output",
  //   authorsDocuments.filter((data) => data)
  // );
  return authorsDocuments.filter((data) => data);
}

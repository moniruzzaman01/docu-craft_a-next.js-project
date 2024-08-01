import { getAuthorsContent } from "@/lib/doc";
import Link from "next/link";
import Tags from "./Tags";

export default async function DisplayAuthorsContent({ authorName }) {
  const documentContents = await getAuthorsContent(
    authorName.replace("%20", " ")
  );
  console.log("doc", documentContents);

  return (
    <div className=" flex flex-col gap-10">
      {documentContents.map((documentContent) => (
        <article key={documentContent.id} className="prose dark:prose-invert">
          <h1>{documentContent.title}</h1>
          <div>
            <span>Published On: {documentContent.date}</span> by{" "}
            <Link href={`/author/${documentContent.author}`}>
              {documentContent.author}
            </Link>{" "}
            under the{" "}
            <Link href={`/categories/${documentContent.category}`}>
              {documentContent.category}
            </Link>{" "}
            category.
          </div>
          {/* {documentContent.tags &&
                  documentContent.tags.map((tag) => <Tags key={tag} tag={tag} />)}
                <div
                  className="lead"
                  dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
                /> */}
        </article>
      ))}
    </div>
  );
}

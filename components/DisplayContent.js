import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tags from "./Tags";

export default async function DisplayContent({ id }) {
  const documentContent = await getDocumentContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.title}</h1>
      <div>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link href={`/authors/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>{" "}
        category.
      </div>
      {documentContent.tags &&
        documentContent.tags.map((tag) => <Tags key={tag} tag={tag} />)}
      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
}

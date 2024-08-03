import DisplayContent from "@/components/DisplayContent";
import { getDocuments } from "@/lib/doc";
import { getDocumentByAuthor } from "@/utils/doc_utils";

export default function Author({ params: { authorName } }) {
  const docs = getDocuments();
  const selectedDocument = getDocumentByAuthor(docs, authorName);
  console.log(docs, selectedDocument);

  return (
    <div className=" divide-y-[1px] divide-green-500">
      {selectedDocument.map((sd) => (
        <DisplayContent key={sd.id} id={sd.id} />
      ))}
    </div>
  );
}

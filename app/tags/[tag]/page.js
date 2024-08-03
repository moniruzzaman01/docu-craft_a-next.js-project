import DisplayContent from "@/components/DisplayContent";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/doc_utils";

export default function TagPage({ params: { tag } }) {
  const docs = getDocuments();
  const selectedDocument = getDocumentByTag(docs, tag);
  console.log(docs, selectedDocument);

  return (
    <div className=" divide-y-[1px] divide-green-500">
      {selectedDocument.map((sd) => (
        <DisplayContent key={sd.id} id={sd.id} />
      ))}
    </div>
  );
}

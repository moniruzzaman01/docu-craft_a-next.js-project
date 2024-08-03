import DisplayContent from "@/components/DisplayContent";
import { getDocuments } from "@/lib/doc";
import { getDocumentByCategory } from "@/utils/doc_utils";

export default function CategoryPage({ params: { category } }) {
  const docs = getDocuments();
  const selectedDocument = getDocumentByCategory(docs, category);

  return (
    <div className=" divide-y-[1px] divide-green-500">
      {selectedDocument.map((sd) => (
        <DisplayContent key={sd.id} id={sd.id} />
      ))}
    </div>
  );
}

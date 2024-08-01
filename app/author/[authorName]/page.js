import DisplayAuthorsContent from "@/components/DisplayAuthorsContent";

export default async function Author({ params: { authorName } }) {
  return <DisplayAuthorsContent authorName={authorName} />;
}

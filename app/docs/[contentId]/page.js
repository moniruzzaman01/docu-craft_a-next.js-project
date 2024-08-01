import DisplayContent from "@/components/DisplayContent";

export default async function Content({ params: { contentId } }) {
  return <DisplayContent id={contentId} />;
}

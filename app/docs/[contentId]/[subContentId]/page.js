import DisplayContent from "@/components/DisplayContent";

export default function SubContent({ params: { subContentId } }) {
  return <DisplayContent id={subContentId} />;
}

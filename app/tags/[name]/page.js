import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/doc-util";

export default function TagsName({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTags(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
}

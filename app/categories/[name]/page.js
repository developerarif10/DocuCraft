import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-util";

export default function TagsName({ params: { name } }) {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByCategory(docs, name);

  return <ContentDisplay id={matchedDocuments[0].id} />;
}

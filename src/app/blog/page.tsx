import UnderDev from "@/components/UnderDev";
import { contentfulClient } from "@/contentful";

export default async function BlogPage() {
  const blogEntries = await contentfulClient.getEntries({ content_type: "blogPost"});
  console.log("Blog Entries", blogEntries.items)

  return <UnderDev />;
}

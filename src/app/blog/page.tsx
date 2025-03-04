import { contentfulClient } from "@/contentful";
import BlogItem from "./components/BlogItem";

export default async function BlogsPage() {
  const blogEntries = await contentfulClient.getEntries({ content_type: "blogPost"});
  console.log("Blog Entries", blogEntries.items)

  const renderBlogItems =  blogEntries?.items.map((blog: any, idx: number) => (
    <BlogItem 
      key={idx} 
      title={blog.fields.title} 
      description={blog.fields.slug}
      href={`/blog/${blog.fields.slug}`}
    />
  ));

  return <div>
    <h1>Blogs</h1>
    {renderBlogItems}
  </div>;
}

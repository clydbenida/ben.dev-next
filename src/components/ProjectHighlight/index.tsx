import { contentfulClient } from "@/contentful";
import ProjectHighlightCardContainer from "./components/ProjectHighlightContainer"

export default async function ProjectHighlightv2() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  return (
    <div className="hero bg-base-200 mb-10">
      <div className="hero-content flex-col-reverse p-0 lg:flex-row-reverse">
        <ProjectHighlightCardContainer projectItems={projectEntries.items} />
      
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">What have I been doing? 🛠️</h1>
          <p className="py-6">
            Currently, I’m exploring some technologies used for web development.
            My main tool for frontend development is React.js.
          </p>
        </div>
      </div>
    </div>
  )
}


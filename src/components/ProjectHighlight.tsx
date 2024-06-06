import { contentfulClient } from "@/contentful";
import ProjectCardHighlight from "./ProjectCardHighlight";

export default async function ProjectHighlight() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  return (
    <div className="hero bg-base-200 mb-10">
      <div className="hero-content flex-col-reverse p-0 lg:flex-row-reverse">
        <div className="flex overflow-x-auto snap-x touch-auto max-w-screen-sm w-[80vw] md:w-[50vw] lg:w-1/2 py-4 px-2">
          {projectEntries.items?.map((item: Record<string, any>, key: number) => (
            <div key={key} className="snap-center mx-5 max-w-auto min-w-[75vw] md:min-w-fit ">
              <ProjectCardHighlight projectFields={item?.fields} />
            </div>
          ))}
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">What have I been doing? 🛠️</h1>
          <p className="py-6">
            Currently, I’m exploring some technologies used for web development.
            My main tool for frontend development is React.js.
          </p>
        </div>
      </div>
    </div>
  );
}

import ProjectCard from "@/components/ProjectCard";
import { contentfulClient } from "@/contentful";

export default async function ProjectsPage() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  return (
    <div className="mt-40">
      <h4 className="text-sm italic font-light">Projects</h4>
      <h1 className="text-3xl font-bold mb-20">
        Projects
      </h1>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {projectEntries.items?.map((item: Record<string, any>, key: number) => (
          <div key={key}>
            <ProjectCard projectFields={item.fields} />
          </div>
        ))}
      </div>
    </div>
  );
}

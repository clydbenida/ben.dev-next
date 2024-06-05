import ProjectCard from "@/components/ProjectCard";
import { contentfulClient } from "@/contentful";

export default async function ProjectsPage() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  console.log("Project Entries", projectEntries.items[0].fields)

  return (
    <div className="mt-24">
      <h4 className="text-sm italic font-light">Projects</h4>
      <h1 className="text-3xl font-bold">
        Some projects that I have worked on
      </h1>
      <p>These are some of the side projects I worked on.</p>

      <div>
        {projectEntries.items?.map((item: Record<string, any>, key: number) => (
          <ProjectCard projectFields={item.fields} key={key} />
        ))}
      </div>
    </div>
  );
}

import ProjectCard from "@/components/ProjectCard";
import UnderDev from "@/components/UnderDev";
import { contentfulClient } from "@/contentful";

export default async function ProjectsPage() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  // return (
  //   <div className="mt-40">
  //     <h4 className="text-sm italic font-light">Projects</h4>
  //     <h1 className="text-3xl font-bold mb-20">
  //       Projects
  //     </h1>

  //     <div>
  //       {projectEntries.items?.map((item: Record<string, any>, key: number) => (
  //         <ProjectCard projectFields={item.fields} key={key} />
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <UnderDev />
  )
}

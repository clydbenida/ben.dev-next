import { contentfulClient } from "@/contentful";
import ProjectHighlightCardContainer from "./components/ProjectHighlightContainer"
import Section from "../Section";

export default async function ProjectHighlightv2() {
  const projectEntries = await contentfulClient.getEntries({
    content_type: "project",
  });

  return (
    <Section>
      <div className="flex-col p-0 items-center">
        <ProjectHighlightCardContainer projectItems={projectEntries.items} />
      </div>
    </Section>
  )
}


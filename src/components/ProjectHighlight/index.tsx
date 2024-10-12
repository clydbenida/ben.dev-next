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
        <div>
          <h1 className="text-xl font-semibold">What have I been doing?️</h1>
          <p className="text-justify">
            Currently, I’m exploring some technologies used for web development.
            My main tool for frontend development is React.js.
          </p>
        </div>

        <ProjectHighlightCardContainer projectItems={projectEntries.items} />
      </div>
    </Section>
  )
}


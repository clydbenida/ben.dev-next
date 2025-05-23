import { contentfulClient } from "@/contentful";
import Section, { SectionTitle } from "@/components/Section";
import WorkSectionList from "./components/WorkSectionList";

export default async function WorkSection() {
  const workExperience = await contentfulClient.getEntries({ content_type: "workExperience" });

  return (
    <Section className="mb-4">
      <SectionTitle className="pb-2">Previous Experience</SectionTitle>
      <WorkSectionList workSections={workExperience.items} />
    </Section>
  )
}

import Section, { SectionContent, SectionTitle } from "@/components/Section";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ProjectHighlightv2 from "@/components/ProjectHighlight";
import WorkSection from "@/components/HomePage/WorkSection";

export default async function Home() {
  return (
    <div className="mt-5">
      <HeroSection />

      <Section>
        <SectionContent>
          I have been working as a Software Engineer since 2022.
          My main tools for fullstack development are MySQL, Express.js, React.js, and Node.js.
          I am mostly confident in building frontends for web applications, though I also enjoy exploring new challenges.
          I am currently open to a part-time remote role if I'm fit for the role.
        </SectionContent>
      </Section>

      <WorkSection />

      <div className="text-center">
        <h3 className="text-xl font-semibold">Interested to work with me?</h3>
        <p>
          Contact me and we can talk.
        </p>
        <Link href="/contact" className="btn">Contact</Link>
      </div>
    </div>
  );
}

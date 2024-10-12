import ProjectHighlight from "@/components/ProjectHighlight";
import Hero from "@/components/Hero/Hero";
import Section, { SectionContent, SectionTitle } from "@/components/Section";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="mt-5">
      <div className="hero min-h-[70vh] bg-base-200 pt-24">
        <div className="hero-content flex-col p-0 w-full">
          <Hero />
          <div className="text-justify w-full">
            <h1 className="font-medium py-4 text-center backdrop-blur-md bg-gray-200 rounded-lg mb-5">
              Hi! I'm a web developer based in the Philippines.
            </h1>
            <div className="flex flex-col justify-between items-center">
              <Image 
                src='/headshot-1.jpeg' 
                alt="Test"
                width={130} 
                height={130} 
                className="object-none object-center h-[125px] w-[125px] rounded-full border-2 mb-5 border-gray-400"  
              />
              <div className="text-center">
                <h1 className="text-2xl sm:text-5xl font-bold">Benedict Clyd Benida</h1>
                <p className="sm:mt-3">Fullstack Developer (Node.js, React.js)</p>
              </div>
            </div>
            {/* <p className="py-6">
              I am a motivated web developer based in the Philippines 🇵🇭.
              Currently I am working as a Jr. Fullstack developer using MERN
              Stack <strong>(MySql, Express.js, React.js, and Node.js)</strong>.
            </p> */}
          </div>
        </div>
      </div>


      <p className="text-justify">
        Currently, I’m exploring some technologies used for web development. My
        main tool for fullstack development is React.js, Express.js, and MySQL.
      </p>

      <Section>
        <SectionTitle>Professional Work</SectionTitle>
        <SectionContent>I have been working as a Software Engineer since 2022. Here are some projects that I want to highlight.</SectionContent>
      </Section>

      {/* <ProjectHighlight /> */}

      <div className="text-center">
        <h3 className="text-xl font-semibold">Want to work together?</h3>
        <p>
          Contact me and we can talk.
        </p>
      </div>
    </div>
  );
}

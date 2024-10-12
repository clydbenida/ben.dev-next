import ProjectHighlight from "@/components/ProjectHighlight";
import { IoIosSend } from "react-icons/io";
import Hero from "@/components/Hero/Hero";
import Section, { SectionContent, SectionTitle } from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="mt-5">
      <div className="hero bg-base-200 pt-24 mb-2">
        <div className="hero-content flex-col p-0 w-full">
          <Hero />
          <div className="text-justify w-full">
            <h1 className="font-medium py-4 text-center backdrop-blur-md bg-gray-200 rounded-lg mb-5">
              Hi! This is a random quote.
            </h1>
            <div className="grid grid-cols-5 items-center">
              <Image 
                src='/headshot-1.jpeg' 
                alt="Test"
                width={125} 
                height={125} 
                className="object-none object-center h-[100px] w-[100px] rounded-full border-2 mb-5 border-gray-400"  
              />
              <div className="text-center sm:ml-2 sm:text-left col-span-3">
                <h1 className="text-xl sm:text-2xl font-bold">Benedict Clyd Benida</h1>
                <p className="text-sm  sm:text-md">Fullstack Developer (Node.js, React.js)</p>
              </div>
              <Link href='/contact' className="justify-self-end bg-gray-200 py-2 px-4 rounded-lg">
                <IoIosSend size={25} />
              </Link>
            </div>
            {/* <p className="py-6">
              I am a motivated web developer based in the Philippines 🇵🇭.
              Currently I am working as a Jr. Fullstack developer using MERN
              Stack <strong>(MySql, Express.js, React.js, and Node.js)</strong>.
            </p> */}
          </div>
        </div>
      </div>

      <Section>
        <SectionTitle>Professional Work</SectionTitle>
        <SectionContent>
          I have been working as a Software Engineer since 2022.
          My main tools for fullstack development are MySQL, Express.js, React.js, and Node.js.
          I am mostly confident in building frontends for web applications, though I also enjoy exploring new challenges.
          I am currently open to a part-time remote role if I'm fit for the role.
        </SectionContent>
      </Section>

      {/* <ProjectHighlight /> */}

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

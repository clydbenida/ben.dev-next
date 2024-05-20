import { contentfulClient } from "@/contentful";

export default async function Home() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Ben 👋</h1>
      <h3 className="text-xl font-semibold">Welcome to my humble abode!</h3>
      <p>
        I am a motivated web developer based in the Philippines 🇵🇭. Currently I
        am working as a Jr. Fullstack developer using MERN Stack{" "}
        <strong>(MySql, Express.js, React.js, and Node.js)</strong>.
      </p>
      <p>
        Currently, I’m exploring some technologies used for web development. My
        main tool for frontend development is React.js.
      </p>
      <p>
        Outside of my work I love playing video games. At the moment, I am into
        story-driven video games. I also love cooking for my girlfriend and our
        adorable doggo named Nuggets 👩🏽‍🦱🐶💖. I also play guitar and drums for
        our local church here in Cavite 🎸🥁.
      </p>
      <h3 className="text-xl font-semibold">If you're interested ✨</h3>
      <p>
        I am currently looking for another job opportunity right now. If you're
        looking for a web developer who can help you build or maintain a
        web-application please reach me out via{" "}
        <a href="mailto:clyd.benidz@gmail.com">email, clyd.benidz@gmail.com</a>.
      </p>
    </div>
  );
}

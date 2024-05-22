import Image from "next/image";

export default async function Home() {
  return (
    <div className="mt-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/headshot-3.jpeg"
            width={500}
            height={800}
            className="rounded-lg shadow-2xl lg:mr-10"
            alt="Headshot"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I'm Ben 👋</h1>
            <p className="py-6">
              I am a motivated web developer based in the Philippines 🇵🇭.
              Currently I am working as a Jr. Fullstack developer using MERN
              Stack <strong>(MySql, Express.js, React.js, and Node.js)</strong>.
            </p>
          </div>
        </div>
      </div>

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

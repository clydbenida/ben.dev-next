import ProjectCard from "./ProjectCard";

export default function ProjectHighlight() {
  return (
    <div className="hero bg-base-200 mb-10">
      <div className="hero-content flex-col-reverse p-0 lg:flex-row-reverse">
        <div className="flex overflow-x-auto snap-x touch-auto max-w-screen-sm w-[80vw] md:w-[50vw] lg:w-1/2 py-4 px-2">
          {new Array(undefined, undefined, undefined).map((item, key) => (
            <ProjectCard key={key} />
          ))}
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold">What have I been doing? 🛠️</h1>
          <p className="py-6">
            Currently, I’m exploring some technologies used for web development.
            My main tool for frontend development is React.js.
          </p>
        </div>
      </div>
    </div>
  );
}

import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="mt-24">
      <h4 className="text-sm italic font-light">Projects</h4>
      <h1 className="text-3xl font-bold">
        Some projects that I have worked on
      </h1>
      <p>These are some of the side projects I worked on.</p>

      <div>
        {new Array(undefined, undefined, undefined).map((item, key) => (
          <ProjectCard key={key} />
        ))}
      </div>
    </div>
  );
}

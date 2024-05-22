export default function ProjectCard() {
  return (
    <div className="snap-center card mx-5 shadow-xl max-w-auto min-w-[75vw] md:min-w-fit ">
      <div className="card-body">
        <div>
          <span className="badge">HTML</span>
          <span className="badge">CSS</span>
          <span className="badge">Javascript</span>
        </div>
        <figure className="w-auto h-[150px] bg-gray-100">
          <div className="">Img placeholder</div>
        </figure>
        <h4 className="text-2xl font-bold">Project Name</h4>
        <p className="text-gray-400">
          This is a short detail about the project. Make sure it's interesting
          and provides concise detail about the project
        </p>
      </div>
    </div>
  );
}

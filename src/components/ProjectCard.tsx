import { ProjectCardPropTypes } from "@/types";
import Image from "next/image";

export default function ProjectCard(props: ProjectCardPropTypes) {

  return (
    <div className="snap-center card mx-5 shadow-xl max-w-auto min-w-[75vw] md:min-w-fit ">
      <div className="card-body">
        <div>
          {props.projectFields?.tags?.map((tag: string, key: number) => (
            <span key={key} className="badge">{tag}</span>
          ))}
        </div>
        <figure className="w-auto h-[150px] bg-gray-100">
          <div className="w-full h-full overflow-hidden">
            {props.projectFields?.imageCover?.fields && (
              <Image
                src={`https:${props.projectFields?.imageCover?.fields.file.url}`}
                alt="project banner"
                fill
                className="relative saturate-51"
              />
            )}
          </div>
        </figure>
        <h4 className="text-2xl font-bold">{props.projectFields?.title}</h4>
        <p className="text-gray-400">
          {props.projectFields?.projectSummary}
        </p>
      </div>
    </div>
  );
}

import { ProjectCardHighlightPropTypes } from "@/types";
import Image from "next/image";

export default function ProjectCardHighlight(props: ProjectCardHighlightPropTypes) {

  return (
    <div className="card shadow-xl min-h-[8rem] w-[320px] h-[350px]">
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

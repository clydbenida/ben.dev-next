import { ProjectCardHighlightPropTypes } from "@/types";
import Image from "next/image";

export default function ProjectCard(props: ProjectCardHighlightPropTypes) {

  return (
    <div className="w-[300px]">
      {props.projectFields?.imageCover?.fields && (
        <Image
          src={`https:${props.projectFields?.imageCover?.fields.file.url}`}
          alt="project banner"
          width={300}
          height={150}
          className="rounded-lg mb-2"
        />
      )}
      <h2 className="text-xl font-bold">{props.projectFields.title}</h2>
      <p className="text-gray-400">{props.projectFields.projectSummary}</p>
    </div>
  );
}

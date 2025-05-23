import { WorkSectionListItemProps } from "@/types";
import { format } from "date-fns";
import { CircleCheck } from "lucide-react";

export default function WorkSectionListItem({idx, workExperience, lastIndex}: WorkSectionListItemProps) {
  return (
    <li key={idx}>
      {idx !== 0 && (<hr className="bg-gray-200 rounded-md" />)}

      <div className="timeline-start text-xs text-gray-500">
        {format(workExperience.fields?.startDate as string, "LLL yyyy")} - {workExperience.fields?.endDate ? format(workExperience.fields?.endDate as string, "LLL yyyy") : " Present"}
      </div>

      <div className="timeline-middle">
        <CircleCheck className="text-gray-500 m-1" size={16} />
      </div>

      <div className="timeline-end flex flex-col items-start timeline-box border-transparent rounded-lg p-2 transition-all hover:border-gray-400 hover:-translate-y-[5px] hover:shadow-lg">
        <h2 className="font-semibold text-lg">{workExperience.fields?.jobTitle as string}</h2>
        <div className="text-xs text-gray-500">{workExperience.fields?.companyName as string}</div>
        <p className="text-sm mt-2">
          {workExperience.fields?.jobDescription as string}
        </p>
      </div>

      {lastIndex !== idx && (<hr className="bg-gray-200 rounded-md" />)}
    </li>
  )
}

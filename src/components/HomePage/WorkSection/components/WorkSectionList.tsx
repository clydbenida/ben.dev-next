import { ContentfulEntry, WorkSectionProps } from "@/types";
import { format } from "date-fns";
import { BookmarkCheck, CircleCheck } from "lucide-react";
import { useMemo } from "react";
import WorkSectionListItem from "./WorkSectionListItem";


export default function WorkSectionList({workSections}: WorkSectionProps) {
  const sortWorkSections = (a: ContentfulEntry, b: ContentfulEntry) => {
    const dateA = a.fields?.startDate as string;
    const dateB = b.fields?.startDate as string;
    
    if (new Date(dateA) > new Date(dateB)) {
      return -1
    }
    return 1
  }

  const renderWorkSections = useMemo(() => {
    if (workSections.length) {
      return workSections
        .sort(sortWorkSections)
        .map((workExperience, idx, arr) => (
          <WorkSectionListItem
            key={idx}
            idx={idx}
            workExperience={workExperience}
            lastIndex={arr.length-1}
          />
      ));
    }
    return <></>
  }, [workSections]);

  return (
    <ul className="timeline timeline-compact timeline-vertical">
      {renderWorkSections}
    </ul>
  )
}

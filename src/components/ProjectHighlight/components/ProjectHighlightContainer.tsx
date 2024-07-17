"use client";

import ProjectHighlightCard from "./ProjectHighlightCard";
import { useCallback, useMemo, useState } from "react";
import { useAnimateHighlight } from "../hooks";

interface ProjectHighlightContainerProps {
  projectItems: Record<string, any>[]
}

export default function ProjectHighlightContainer(props: ProjectHighlightContainerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const {scope, triggerAnimation} = useAnimateHighlight()

  const handleClickNext = useCallback(() => {
    triggerAnimation()
    
    if (selectedIndex === props.projectItems.length - 1) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(prev => prev + 1);
    }
  }, [selectedIndex, props.projectItems, triggerAnimation])

  const handleClickPrev = useCallback(() => {
    triggerAnimation()
    
    if (selectedIndex === 0) {
      setSelectedIndex(props.projectItems.length - 1)
    } else {
      setSelectedIndex(prev => prev - 1);
    }
  }, [selectedIndex, props.projectItems, triggerAnimation])

  const renderProjectHighlights = useMemo(() => (
    props.projectItems.filter((_item, idx) => idx === selectedIndex)
    .map((item, idx) => ( 
      <ProjectHighlightCard projectFields={item.fields} key={idx} /> 
    ))
    ), [props.projectItems, selectedIndex]
  )

  return (
    <div className="flex flex-col gap-10 items-center justify-center max-w-screen-sm w-[80vw] md:w-[50vw] lg:w-1/2 py-4 px-2">
      <div ref={scope}>
        <section>
          {renderProjectHighlights}
        </section>
      </div>
      <div className="flex gap-4">
        <div className="btn btn-primary" onClick={handleClickNext}>Next</div>
        <div className="btn btn-primary" onClick={handleClickPrev}>Previous</div>
      </div>
    </div>
  )
}

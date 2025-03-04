"use client";

import { useMemo } from "react";

interface KeywordsProps {
  keywords: string[];
}
export default function Keywords ({keywords}: KeywordsProps) {
  const render = useMemo(() => keywords.map((word, idx) => (
    <span className="text-sm p-1 border mr-2 rounded-md" key={idx}>{word}</span>
  )), [keywords]); 

  return (
    <div className="mb-4">{render}</div>
  )
}
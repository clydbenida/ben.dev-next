/* eslint-disable react/display-name */
'use client';

import { memo, PropsWithChildren } from "react";

function Section ({children}: PropsWithChildren) {
  return (
    <div>{children}</div>
  )
}

export const SectionTitle = ({children}: PropsWithChildren) => {
  return (
    <h3 className="text-xl font-semibold">{children}</h3>
  )
}

export const SectionContent = ({children}: PropsWithChildren) => {
  return (
    <p className="text-justify">{children}</p>
  )
}

export default Section;
/* eslint-disable react/display-name */
'use client';

import { memo, PropsWithChildren } from "react";

function Section ({children, className, ...rest}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"pb-6 " + className} {...rest}>{children}</div>
  )
}

export const SectionTitle = ({children, className, ...rest}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={"text-xl font-semibold " + className} {...rest}>{children}</h3>
  )
}

export const SectionContent = ({children, className, ...rest}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={"text-justify " + className} {...rest}>{children}</p>
  )
}

export default Section;

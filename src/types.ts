import { Entry, EntrySkeletonType } from "contentful";

export interface NavType {
  label: string;
  href: string;
  sortOrder: number;
}

export interface ProjectEntryType {
  title: string;
  projectStatus: string;
  imageCover: Record<string, any>;
  projectDescription: Record<string, any>;
  projectSummary: string;
  tags: string[];
}

export interface ProjectCardPropTypes {
  projectFields: ProjectEntryType;
}

export interface HeaderPropTypes {
  navItems: NavType[];
}

export interface FooterPropTypes {
  navItems: NavType[];
}

export interface ContactFormProps {
  canSendMail: boolean;
}

export interface WorkSectionProps {
  workSections: ContentfulEntry[]
}

export interface WorkSectionListItemProps {
  idx: number
  workExperience: ContentfulEntry
  lastIndex: number
}

export type ContentfulEntry = Entry<EntrySkeletonType, undefined, string>


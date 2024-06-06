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

export interface ProjectCardHighlightPropTypes {
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

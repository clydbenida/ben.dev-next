export interface NavType {
  label: string;
  href: string;
  sortOrder: number;
}

export interface HeaderPropTypes {
  navItems: NavType[];
}

export interface ContactFormProps {
  canSendMail: boolean;
}

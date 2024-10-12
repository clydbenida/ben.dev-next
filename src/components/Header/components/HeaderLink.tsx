import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  navItem: {
    href: string;
    label: string;
  };
}

export default function HeaderLink({ navItem }: HeaderLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      className={`text-gray-400 ${
        pathname === navItem.href && "text-gray-900"
      } hover:text-gray-900 hover:bg-gray-50 rounded-lg p-2 pr-6`}
      href={navItem.href}
    >
      {navItem.label}
    </Link>
  );
}

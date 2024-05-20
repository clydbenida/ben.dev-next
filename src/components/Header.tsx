"use client";

import { HeaderPropTypes, NavType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function Header(props: HeaderPropTypes) {
  const pathname = usePathname();

  const renderNavComponent = useMemo(
    () =>
      props.navItems
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((navItem, idx) => (
          <Link
            className={`text-gray-400 ${pathname === navItem.href && "text-gray-900"} hover:text-gray-900 hover:bg-gray-50 rounded-lg p-2 pr-6`}
            key={idx}
            href={navItem.href}
          >
            {navItem.label}
          </Link>
        )),
    [props.navItems, pathname],
  );

  return (
    <header>
      <h1 className="text-3xl font-bold mb-3">ben.dev</h1>
      <nav className="flex border-b mb-3 pb-3">{renderNavComponent}</nav>
    </header>
  );
}

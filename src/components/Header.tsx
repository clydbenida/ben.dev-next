"use client";

import { HeaderPropTypes } from "@/types";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";

export default function Header(props: HeaderPropTypes) {
  const targetRef = useRef(null);
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(false);

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

  const { scrollY } = useScroll({});

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 100) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  });

  const headerVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, x: -100 }}
        variants={headerVariants}
        animate={showHeader ? "visible" : "hidden"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
          staggerChildren: 0.05,
        }}
        className="fixed z-10 w-[100%] bg-white border-b mb-3"
      >
        <div className="w-screen lg:w-[80vw] mx-auto mt-10">
          <h1 className="text-3xl font-bold mb-3">ben.dev</h1>
          <nav className="flex pb-3">{renderNavComponent}</nav>
        </div>
      </motion.header>
      <div ref={targetRef} className="absolute top-[100%]" />
    </>
  );
}
